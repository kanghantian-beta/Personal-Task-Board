const firebaseConfig = {
  apiKey: "AIzaSyDZpbc9cWvJrV-s1ZsqpQOyeN1VEXu0wdA",
  authDomain: "myfastboard.firebaseapp.com",
  databaseURL: "https://myfastboard-default-rtdb.firebaseio.com",
  projectId: "myfastboard",
  storageBucket: "myfastboard.firebasestorage.app",
  messagingSenderId: "503778192388",
  appId: "1:503778192388:web:8d85f32ba58f634b559951"
};

// 初始化
try {
    firebase.initializeApp(firebaseConfig);
} catch(e) { console.error(e); }
const db = firebase.database();

/* --- 语言与常量 --- */
const I18N = {
    zh: { title:'快记板', todo:'待办', doing:'进行中', done:'已完成', dist:'多维分布', stat_status:'状态统计', stat_urgency:'紧急度统计', add_title:'⚡ 快速添加', add_ph:'要做什么？', btn_add:'添加', note_title:'灵感 / 笔记 / 截图', note_ph:'在此记录，自动保存...', btn_save:'保存', list_title:'任务明细', set_title:'全局设置', set_lang:'语言 / Language', set_backup:'数据管理', btn_export:'导出备份', btn_import:'导入恢复', set_font:'字体大小', set_radius:'圆角大小', set_color:'自定义颜色', col_bg:'背景', col_card:'卡片', btn_close:'完成', opt_p1:'🔴 重要且紧急', opt_p2:'🔵 重要不紧急', opt_p3:'🟠 不重要紧急', opt_p4:'⚪ 普通任务', opt_work:'💼 工作', opt_study:'📚 学习', opt_life:'🏠 生活', opt_all_tag:'全部标签', opt_all_cat:'全部类别', opt_all_sts:'全部状态', btn_ocr:'识别', btn_img:'图片', btn_del:'删除', msg_del_task:'确定要删除这个任务吗？', msg_del_note:'确定要删除这条笔记吗？', msg_enter_sub:'请输入子任务内容：', msg_enter_name:'请输入备份文件名：', btn_confirm:'确定', btn_cancel:'取消', add_cat_title:'新建分类', add_cat_name:'分类名称', add_cat_color:'颜色' },
    en: { title:'Fast Board', todo:'Todo', doing:'Doing', done:'Done', dist:'Distribution', stat_status:'Status Stats', stat_urgency:'Urgency Stats', add_title:'⚡ Quick Add', add_ph:'What needs to be done?', btn_add:'Add', note_title:'Ideas & Notes', note_ph:'Type here...', btn_save:'Save', list_title:'Task List', set_title:'Settings', set_lang:'Language', set_backup:'Data Backup', btn_export:'Export', btn_import:'Import', set_font:'Font Size', set_radius:'Corner Radius', set_color:'Custom Colors', col_bg:'Bg', col_card:'Card', btn_close:'Close', opt_p1:'🔴 Imp & Urg', opt_p2:'🔵 Imp & Not Urg', opt_p3:'🟠 Not Imp & Urg', opt_p4:'⚪ Normal', opt_work:'💼 Work', opt_study:'📚 Study', opt_life:'🏠 Life', opt_all_tag:'All Tags', opt_all_cat:'All Cats', opt_all_sts:'All Status', btn_ocr:'OCR', btn_img:'Image', btn_del:'Del', msg_del_task:'Delete this task?', msg_del_note:'Delete this note?', msg_enter_sub:'Enter subtask:', msg_enter_name:'Enter filename:', btn_confirm:'OK', btn_cancel:'Cancel', add_cat_title:'New Category', add_cat_name:'Name', add_cat_color:'Color' },
    // ... 其他语言保持之前的结构，这里省略以节省空间
};
const COLORS = { p1:'#f54a45', p2:'#3370ff', p3:'#ff8800', p4:'#999', work:'#3370ff', study:'#9333ea', life:'#00b665', todo:'#ccc', doing:'#3370ff', done:'#00b665' };

/* --- 状态 --- */
let currentRoomId = localStorage.getItem('v8_room_id'); // 读取本地保存的ID
let tasks=[], notes=[], config={bgColor:'#f2f3f5', cardColor:'#ffffff', radius:12, font:1, lang:'zh', pcWidth:600, order:[], pinned:[], appTitle:'快记板', customCats:[]};
let filters={tag:'all', cat:'all', status:'all'}, tempImg=null;
let isRemoteUpdate = false; 
let saveTimer = null; // 防抖定时器

function init() {
    // 1. 检查是否登录
    if (!currentRoomId) {
        document.getElementById('login-modal').style.display = 'flex';
        // 尝试生成个默认ID给用户看
        document.getElementById('login-id-input').value = generateNewIdStr();
    } else {
        startApp();
    }
}

/* --- 登录逻辑 --- */
function generateNewIdStr() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}
function generateNewId() {
    document.getElementById('login-id-input').value = generateNewIdStr();
}
function handleLogin() {
    const input = document.getElementById('login-id-input').value.trim();
    if (!input) return alert('请输入 ID');
    currentRoomId = input;
    localStorage.setItem('v8_room_id', currentRoomId);
    document.getElementById('login-modal').style.display = 'none';
    startApp();
}
function logoutAndClear() {
    if(!confirm('确定要退出并清除本地数据吗？（云端数据保留）')) return;
    localStorage.removeItem('v8_room_id');
    localStorage.removeItem('v8_data_cache'); // 清除缓存
    location.reload();
}

/* --- 核心启动 --- */
function startApp() {
    // 1. 先加载本地缓存 (如果有)，实现秒开
    const cache = localStorage.getItem('v8_data_cache');
    if (cache) {
        try {
            const d = JSON.parse(cache);
            tasks = d.tasks || []; notes = d.notes || []; config = d.config || config;
            refreshUI(); // 立即显示本地数据
        } catch(e) {}
    }

    // 2. 显示 ID
    document.getElementById('current-room-id').innerText = `ID: ${currentRoomId}`;
    document.getElementById('setting-room-id').value = currentRoomId;

    // 3. 启动 Firebase 监听
    const roomRef = db.ref('rooms/' + currentRoomId);
    
    // 连接状态监测
    const connectedRef = db.ref(".info/connected");
    connectedRef.on("value", (snap) => {
        const ind = document.getElementById('sync-indicator');
        if (snap.val() === true) {
            ind.innerText = '🟢'; ind.title = "已连接云端";
        } else {
            ind.innerText = '🔴'; ind.title = "断开连接";
        }
    });

    roomRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            console.log('☁️ 收到云端更新');
            isRemoteUpdate = true; // 锁定，防止回环
            
            tasks = data.tasks || [];
            notes = data.notes || [];
            if(data.config) config = data.config;
            
            refreshUI(); // 刷新界面
            // 同时也更新本地缓存
            localStorage.setItem('v8_data_cache', JSON.stringify({tasks, notes, config}));
            
            isRemoteUpdate = false;
        } else {
            // 云端为空（新房间），看看本地有没有旧数据可以上传
            if (!cache) save(); // 确实是全新的，初始化云端
        }
    });

    // 4. 其他初始化
    setupDrag(); setupClock();
    renderSelect('sel-add-tag', getOpts('tag'), 'p4');
    renderSelect('sel-add-cat', getOpts('cat'), 'life');
    updateFilters();
    document.getElementById('note-input').addEventListener('paste', handlePaste);
}

/* --- 核心保存 (本地优先 + 防抖上传) --- */
function save() {
    // 1. 无论如何，先存本地缓存 (秒级响应，防止丢失)
    localStorage.setItem('v8_data_cache', JSON.stringify({tasks, notes, config}));
    
    // 2. 如果是云端来的更新，不要回传
    if (isRemoteUpdate) return;

    // 3. 防抖上传：用户停止操作 1秒后 再上传，避免频繁请求导致卡顿
    clearTimeout(saveTimer);
    
    const ind = document.getElementById('sync-indicator');
    ind.innerText = '🟡'; // 黄色代表有未同步修改

    saveTimer = setTimeout(() => {
        ind.innerText = '⬆️'; // 上传中
        db.ref('rooms/' + currentRoomId).set({
            tasks: tasks,
            notes: notes,
            config: config
        }).then(() => {
            ind.innerText = '🟢'; // 成功
        }).catch(err => {
            console.error(err);
            ind.innerText = '❌'; // 失败
        });
    }, 1000); // 1秒延迟
}

/* --- 界面刷新 --- */
function refreshUI() {
    // 只有当焦点不在标题框时才更新标题，防止输入被打断
    if(document.activeElement.id !== 'app-title-input') {
        document.getElementById('app-title-input').value = config.appTitle || '快记板';
        document.title = config.appTitle || '快记板';
    }
    
    renderKPI(); renderCharts(); renderList(); renderNotes();
    updateFilters();
    applyConfig();
    
    // 固定状态
    document.querySelectorAll('.section-block').forEach(el => {
        el.classList.toggle('pinned', config.pinned.includes(el.id));
        const btn = el.querySelector('.pin-btn');
        if(btn) btn.innerText = config.pinned.includes(el.id) ? '🌟' : '📌';
    });
}

function copyId() {
    navigator.clipboard.writeText(currentRoomId).then(() => alert('ID 已复制：' + currentRoomId));
}

/* --- 交互逻辑 (保持不变，只是调用 save) --- */
function updateAppTitle(val) { config.appTitle = val; save(); }
function handleKPIClick(status) { filters.status = status; if(!config.pinned.includes('sec-kpi')) config.pinned.push('sec-kpi'); save(); refreshUI(); setTimeout(() => document.getElementById('sec-list').scrollIntoView({behavior:'smooth'}), 100); }
function togglePin(id) { const idx = config.pinned.indexOf(id); if(idx > -1) config.pinned.splice(idx, 1); else config.pinned.push(id); save(); refreshUI(); }

function addTask() {
    const title = document.getElementById('add-title').value;
    if(!title) return;
    const n = getNow();
    tasks.unshift({id:Date.now(), name:title, date:n.d, time:n.t, tag:document.getElementById('sel-add-tag').dataset.val, cat:document.getElementById('sel-add-cat').dataset.val, status:'todo', sub:[], showSub:false});
    document.getElementById('add-title').value=''; save(); refreshUI();
}
function updateTask(i,k,v) { tasks[i][k]=v; const n=getNow(); tasks[i].date=n.d; tasks[i].time=n.t; save(); } // 注意：输入框输入时不refreshUI，只save，防止焦点丢失
function delTask(i) { showCustomModal('msg_del_task', '', () => { tasks.splice(i,1); save(); refreshUI(); }); }
function promptSub(i) { showCustomModal('msg_enter_sub', '<input type="text" id="modal-input" style="width:100%" class="seamless-input" style="border:1px solid #ddd">', (val) => { tasks[i].sub.push({text:val, done:false}); tasks[i].showSub=true; save(); refreshUI(); }, true); }

async function addNote(){const t=document.getElementById('note-input').value;if(!t&&!tempImg)return;try{const n=getNow();notes.unshift({id:Date.now(),text:t,img:tempImg,date:n.d,time:n.t});save();document.getElementById('note-input').value='';document.getElementById('note-preview-area').innerHTML='';tempImg=null;renderNotes();}catch(e){alert('Err: Img too large for local cache');}}
function delNote(i) { showCustomModal('msg_del_note', '', () => { notes.splice(i,1); save(); renderNotes(); }); }
function updateNote(i,v) { notes[i].text=v; const n=getNow(); notes[i].date=n.d; notes[i].time=n.t; save(); }

/* --- 渲染逻辑 (Select, List, Charts, OCR) --- */
function getOpts(type) {
    const t=I18N[config.lang||'zh'];
    if(type==='tag') return [{v:'p1',t:t.opt_p1,c:'bg-p1',col:COLORS.p1},{v:'p2',t:t.opt_p2,c:'bg-p2',col:COLORS.p2},{v:'p3',t:t.opt_p3,c:'bg-p3',col:COLORS.p3},{v:'p4',t:t.opt_p4,c:'bg-p4',col:COLORS.p4}];
    if(type==='cat') {
        let base = [{v:'work',t:t.opt_work,c:'bg-work',col:COLORS.work},{v:'study',t:t.opt_study,c:'bg-study',col:COLORS.study},{v:'life',t:t.opt_life,c:'bg-life',col:COLORS.life}];
        if(config.customCats) config.customCats.forEach(c => base.push({v:c.name, t:c.name, c:'', col:c.color, isCustom:true}));
        base.push({v:'add_custom', t:'➕ ' + (t.add_cat_title || 'New'), c:'', col:'#333', isAction:true});
        return base;
    }
    if(type==='status') return [{v:'todo',t:t.todo,c:'bg-todo',col:COLORS.todo},{v:'doing',t:t.doing,c:'bg-doing',col:COLORS.doing},{v:'done',t:t.done,c:'bg-done',col:COLORS.done}];
    return [];
}
function updateFilters() {
    const t=I18N[config.lang||'zh'];
    const mkF=(a,l)=>[{v:'all',t:l,c:'',col:'#ccc'}].concat(a);
    const cleanCats = getOpts('cat').filter(o => !o.isAction);
    renderSelect('filter-tag', mkF(getOpts('tag'),t.opt_all_tag), filters.tag, v=>{filters.tag=v;renderList()});
    renderSelect('filter-cat', mkF(cleanCats,t.opt_all_cat), filters.cat, v=>{filters.cat=v;renderList()});
    renderSelect('filter-status', mkF(getOpts('status'),t.opt_all_sts), filters.status, v=>{filters.status=v;renderList()});
}
function renderSelect(id,opts,val,cb){
    const el=document.getElementById(id);if(!el)return; el.optsData = opts; 
    let cur=opts.find(o=>o.v===val); if (!cur && val !== 'add_custom') cur = opts[0];
    const triggerHtml = cur ? `<span class="color-dot" style="background:${cur.col||'#ccc'}"></span> ${cur.t}` : val;
    el.innerHTML=`<div class="select-trigger ${cur?cur.c:''}" onclick="toggleSelect('${id}')" style="${cur&&cur.isCustom?`border-color:${cur.col}`:''}">${triggerHtml}</div><div class="select-options">${opts.map(o=>`<div class="select-option" onclick="selectOption('${id}','${o.v}')"><span class="color-dot" style="background:${o.col||'#333'}"></span> ${o.t}</div>`).join('')}</div>`;
    el.dataset.val=val; el.onchangeCallback=cb;
}
function toggleSelect(id){const all=document.querySelectorAll('.select-options'),t=document.querySelector(`#${id} .select-options`),isOpen=t.classList.contains('open');all.forEach(e=>{e.classList.remove('open');e.closest('.section-block')?.classList.remove('z-top')});if(!isOpen){t.classList.add('open');t.closest('.section-block')?.classList.add('z-top');}}
function selectOption(id,v){if(v==='add_custom'){toggleSelect(id);handleAddCustomCategory();return;}const el=document.getElementById(id);el.dataset.val=v;const cur=el.optsData.find(o=>o.v===v);if(cur){const tr=el.querySelector('.select-trigger');tr.innerHTML=`<span class="color-dot" style="background:${cur.col||'#ccc'}"></span> ${cur.t}`;tr.className=`select-trigger ${cur.c||''}`;if(cur.isCustom)tr.style.borderColor=cur.col;}toggleSelect(id);if(el.onchangeCallback)el.onchangeCallback(v);}
document.addEventListener('click',e=>{if(!e.target.closest('.custom-select')){document.querySelectorAll('.select-options').forEach(x=>x.classList.remove('open'));document.querySelectorAll('.section-block').forEach(x=>x.classList.remove('z-top'));}});
function handleAddCustomCategory() { const t=I18N[config.lang||'zh']; showCustomModal(t.add_cat_title, `<div style="margin-bottom:10px">${t.add_cat_name}:</div><input type="text" id="cat-name" class="seamless-input" style="border:1px solid #ddd; width:100%; margin-bottom:10px"><div style="display:flex;align-items:center;gap:10px">${t.add_cat_color}: <input type="color" id="cat-color" value="#ff0000" style="height:30px;width:60px"></div>`, ()=>{const name=document.getElementById('cat-name').value;const color=document.getElementById('cat-color').value;if(name){if(!config.customCats)config.customCats=[];config.customCats.push({name,color});save();renderSelect('sel-add-cat',getOpts('cat'),name);updateFilters();}}); }

function renderList() {
    const list=document.getElementById('task-list'); list.innerHTML=''; const t = I18N[config.lang||'zh'];
    let res=tasks.filter(task => (filters.tag==='all'||task.tag===filters.tag)&&(filters.cat==='all'||task.cat===filters.cat)&&(filters.status==='all'||task.status===filters.status));
    res.sort((a,b)=>({doing:0,todo:1,done:2}[a.status]-{doing:0,todo:1,done:2}[b.status]||a.tag.localeCompare(b.tag)));
    res.forEach(task=>{
        const i=tasks.indexOf(task); const div=document.createElement('div'); div.className='task-item';
        div.innerHTML=`<div class="task-header"><input class="task-title-input seamless-input ${task.status==='done'?'done':''}" value="${task.name}" onchange="updateTask(${i},'name',this.value)"><button onclick="delTask(${i})" style="border:none;background:none;color:#ccc;cursor:pointer">${t.btn_del} ×</button></div><div class="task-meta"><span>📅 ${task.date}</span><span>⏰ ${task.time}</span></div><div class="task-ctrls"><div class="custom-select mini-select" id="s-tag-${i}"></div><div class="custom-select mini-select" id="s-cat-${i}"></div><div class="custom-select mini-select" id="s-sts-${i}"></div><button class="btn btn-text" style="border:1px solid #eee;font-size:0.8em" onclick="tasks[${i}].showSub=!tasks[${i}].showSub;save();refreshUI()">📋 ${task.sub.length}</button><button class="btn btn-text" style="color:var(--blue);font-size:1.2em" onclick="promptSub(${i})">+</button></div>${task.sub&&task.sub.length?`<div class="subtasks ${task.showSub?'show':''}">${task.sub.map((s,si)=>`<div class="sub-item"><input type="checkbox" ${s.done?'checked':''} onchange="tasks[${i}].sub[${si}].done=!tasks[${i}].sub[${si}].done;save()"><input class="seamless-input" value="${s.text}" onchange="tasks[${i}].sub[${si}].text=this.value;save()" style="${s.done?'text-decoration:line-through;color:#ccc':''}"></div>`).join('')}</div>`:''}`;
        list.appendChild(div);
        renderSelect(`s-tag-${i}`,getOpts('tag'),task.tag,v=>updateTask(i,'tag',v));renderSelect(`s-cat-${i}`,getOpts('cat'),task.cat,v=>updateTask(i,'cat',v));renderSelect(`s-sts-${i}`,getOpts('status'),task.status,v=>updateTask(i,'status',v));
    });
}

// 剩余的图表、OCR、图片处理、设置代码保持 V7 原样 (为节省篇幅略去重复，但在实际文件中必须包含)
// 请确保 copy 之前 V7 代码中 renderNotes, renderCharts, compressImage, handleImgUpload, openSettings 等函数。
// 关键是: 所有修改数据的操作，最后都要调用 save()，而 save() 内部已经做了防抖和本地存储。

function compressImage(f){return new Promise(r=>{const rd=new FileReader();rd.readAsDataURL(f);rd.onload=e=>{const img=new Image();img.src=e.target.result;img.onload=()=>{const cvs=document.createElement('canvas');const ctx=cvs.getContext('2d');const max=600;let w=img.width,h=img.height;if(w>max){h*=max/w;w=max;}cvs.width=w;cvs.height=h;ctx.drawImage(img,0,0,w,h);r(cvs.toDataURL('image/jpeg',0.6))}}})}
async function handleImgUpload(i){if(i.files[0]){tempImg=await compressImage(i.files[0]);document.getElementById('note-preview-area').innerHTML=`<img src="${tempImg}" class="note-thumb">`}}
async function handlePaste(e){for(let i of e.clipboardData.items)if(i.type.startsWith('image')){tempImg=await compressImage(i.getAsFile());document.getElementById('note-preview-area').innerHTML=`<img src="${tempImg}" class="note-thumb">`}}
async function doOCR() {
    if(!tempImg) return; const btn=document.getElementById('btn-ocr'); const old=btn.innerText; btn.innerText='...';
    try { const {data:{text}} = await Tesseract.recognize(tempImg, config.lang==='zh'?'chi_sim':'eng'); document.getElementById('note-input').value += '\n'+text.replace(/([\u4e00-\u9fa5])\s+(?=[\u4e00-\u9fa5])/g, '$1'); } catch(e){} btn.innerText=old;
}
function renderCharts(){const calc=(arr,k)=>arr.reduce((a,c)=>{a[c[k]]=(a[c[k]]||0)+1;return a},{});const dTag=calc(tasks,'tag'),dCat=calc(tasks,'cat'),dSts=calc(tasks,'status');drawPie('pie-tag','leg-tag',dTag,getOpts('tag'));drawPie('pie-cat','leg-cat',dCat,getOpts('cat'));drawPie('pie-status','leg-status',dSts,getOpts('status'));drawBar('bar-status-chart','bar-status-leg',dSts,getOpts('status'));drawBar('bar-urgency-chart','bar-urgency-leg',dTag,getOpts('tag'));}
function drawPie(cid,lid,d,o){const t=tasks.length||1;let s=[],c=0,l='';o.forEach(x=>{if(d[x.v]){const p=(d[x.v]/t)*100;s.push(`${x.col} ${c}% ${c+p}%`);c+=p;}l+=`<div class="legend-item"><div class="legend-color" style="background:${x.col}"></div><div>${x.t}</div></div>`});document.getElementById(cid).style.background=s.length?`conic-gradient(${s.join(', ')})`:`conic-gradient(#eee 0 100%)`;document.getElementById(lid).innerHTML=l;}
function drawBar(cid,lid,d,o){const el=document.getElementById(cid),le=document.getElementById(lid);el.innerHTML='';le.innerHTML='';const m=Math.max(...Object.values(d))||1;o.forEach(x=>{const h=(d[x.v]||0)/m*100;el.innerHTML+=`<div class="bar-col"><div class="bar-fill" style="height:${h}%;background:${x.col}"></div></div>`;le.innerHTML+=`<div class="legend-item"><div class="legend-color" style="background:${x.col}"></div><div>${x.t}</div></div>`});}
function getNow(){const n=new Date();return{d:n.toISOString().split('T')[0],t:n.toTimeString().slice(0,5)}}
function setupClock(){setInterval(()=>document.getElementById('sys-clock').innerText=new Date().toLocaleTimeString(),1000)}
function setupDrag(){const c=document.getElementById('app-container');let t,d,y;document.querySelectorAll('.section-block').forEach(e=>{e.addEventListener('touchstart',ev=>{if(['INPUT','TEXTAREA'].includes(ev.target.tagName))return;y=ev.touches[0].clientY;t=setTimeout(()=>{d=e;e.classList.add('dragging');navigator.vibrate?.(50)},600)},{passive:true});e.addEventListener('touchmove',ev=>{if(!d&&Math.abs(ev.touches[0].clientY-y)>5){clearTimeout(t);return}if(d){ev.preventDefault();const touch=ev.touches[0];if(touch.clientY<50)window.scrollBy(0,-10);if(touch.clientY>window.innerHeight-50)window.scrollBy(0,10);const tg=document.elementFromPoint(touch.clientX,touch.clientY)?.closest('.section-block');if(tg&&tg!==d&&c.contains(tg)){const all=[...c.children];all.indexOf(d)<all.indexOf(tg)?tg.after(d):tg.before(d)}}},{passive:false});e.addEventListener('touchend',()=>{clearTimeout(t);if(d){d.classList.remove('dragging');config.order=[...c.children].map(x=>x.id);save()}d=null})});if(config.order)config.order.forEach(id=>c.appendChild(document.getElementById(id)))}
function openSettings(){document.getElementById('settings-modal').style.display='flex';document.getElementById('width-range').value=config.pcWidth;document.getElementById('width-val').innerText=config.pcWidth;}
function closeSettings(){document.getElementById('settings-modal').style.display='none';save();}
function setPcWidth(v){config.pcWidth=v;document.getElementById('width-val').innerText=v;applyConfig();}
function setFont(v){config.font=v;applyConfig();}
function setRadius(v){config.radius=v;applyConfig();}
function setBgColor(v){config.bgColor=v;applyConfig();}
function setCardColor(v){config.cardColor=v;applyConfig();}
function changeLang(l){config.lang=l;updateLang();updateFilters();refreshUI();save();}
function updateLang(){const t=I18N[config.lang||'zh'];document.querySelectorAll('[data-i18n]').forEach(e=>e.innerText=t[e.dataset.i18n]);document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=t[e.dataset.i18nPh]);document.getElementById('lang-select').value=config.lang;}
function applyConfig(){const r=document.documentElement.style;r.setProperty('--bg-body',config.bgColor);r.setProperty('--bg-card',config.cardColor);r.setProperty('--radius',config.radius+'px');r.setProperty('--font-scale',config.font);r.setProperty('--pc-width',config.pcWidth+'px');document.getElementById('bg-color-picker').value=config.bgColor;document.getElementById('card-color-picker').value=config.cardColor;document.getElementById('radius-range').value=config.radius;document.getElementById('font-range').value=config.font;}
function promptExport(){const n="backup_"+getNow().d;showCustomModal('msg_enter_name',`<input type="text" id="modal-input" style="width:100%" value="${n}" class="seamless-input" style="border:1px solid #ddd">`,(val)=>{const b=new Blob([JSON.stringify({tasks,notes,config})],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=`${val}.json`;a.click();},true,n);}
function importData(i){const f=i.files[0];if(f){const r=new FileReader();r.onload=e=>{try{const d=JSON.parse(e.target.result);tasks=d.tasks||[];notes=d.notes||[];config={...config,...d.config};save();location.reload();}catch(x){alert('Err')}};r.readAsText(f);}}
function closeLightbox(){document.getElementById('lightbox').style.display='none'}
function showCustomModal(t,b,c,i=false,d=''){const l=I18N[config.lang||'zh'];document.getElementById('modal-title').innerText=l[t]||t;document.getElementById('modal-body').innerHTML=b;document.querySelector('#custom-modal .btn-text').innerText=l.btn_cancel;document.querySelector('#custom-modal .btn-primary').innerText=l.btn_confirm;const m=document.getElementById('custom-modal');m.style.display='flex';if(i){const inp=document.getElementById('modal-input');if(inp){inp.value=d;inp.focus()}}modalCallback=()=>{if(i){const v=document.getElementById('modal-input').value;if(v)c(v)}else{c()}closeCustomModal()};document.getElementById('modal-confirm-btn').onclick=modalCallback}
function closeCustomModal(e){if(!e||e.target.id==='custom-modal'||e.target.getAttribute('data-i18n')==='btn_cancel'){document.getElementById('custom-modal').style.display='none';modalCallback=null}}

init();