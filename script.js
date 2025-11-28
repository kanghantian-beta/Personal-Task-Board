/* --- 语言包与常量 --- */
const I18N = {
    zh: { title:'个人任务看板', todo:'待办', doing:'进行中', done:'已完成', dist:'多维分布', stat_status:'状态统计', stat_urgency:'紧急度统计', add_title:'⚡ 快速添加', add_ph:'要做什么？', btn_add:'添加', note_title:'灵感 / 笔记 / 截图', note_ph:'在此记录，自动保存...', btn_save:'保存', list_title:'任务明细', set_title:'全局设置', set_lang:'语言 / Language', set_backup:'数据管理', btn_export:'导出备份', btn_import:'导入恢复', set_font:'字体大小', set_radius:'圆角大小', set_color:'自定义颜色', col_bg:'背景', col_card:'卡片', btn_close:'完成', opt_p1:'🔴 重要且紧急', opt_p2:'🔵 重要不紧急', opt_p3:'🟠 不重要紧急', opt_p4:'⚪ 普通任务', opt_work:'💼 工作', opt_study:'📚 学习', opt_life:'🏠 生活', opt_all_tag:'全部标签', opt_all_cat:'全部类别', opt_all_sts:'全部状态', btn_ocr:'识别', btn_img:'图片', btn_del:'删除', msg_del_task:'确定要删除这个任务吗？', msg_del_note:'确定要删除这条笔记吗？', msg_enter_sub:'请输入子任务内容：', msg_enter_name:'请输入备份文件名：', btn_confirm:'确定', btn_cancel:'取消' },
    en: { title:'Life OS', todo:'Todo', doing:'Doing', done:'Done', dist:'Distribution', stat_status:'Status Stats', stat_urgency:'Urgency Stats', add_title:'⚡ Quick Add', add_ph:'What needs to be done?', btn_add:'Add', note_title:'Ideas & Notes', note_ph:'Type here...', btn_save:'Save', list_title:'Task List', set_title:'Settings', set_lang:'Language', set_backup:'Data Backup', btn_export:'Export', btn_import:'Import', set_font:'Font Size', set_radius:'Corner Radius', set_color:'Custom Colors', col_bg:'Bg', col_card:'Card', btn_close:'Close', opt_p1:'🔴 Imp & Urg', opt_p2:'🔵 Imp & Not Urg', opt_p3:'🟠 Not Imp & Urg', opt_p4:'⚪ Normal', opt_work:'💼 Work', opt_study:'📚 Study', opt_life:'🏠 Life', opt_all_tag:'All Tags', opt_all_cat:'All Cats', opt_all_sts:'All Status', btn_ocr:'OCR', btn_img:'Image', btn_del:'Del', msg_del_task:'Delete this task?', msg_del_note:'Delete this note?', msg_enter_sub:'Enter subtask:', msg_enter_name:'Enter filename:', btn_confirm:'OK', btn_cancel:'Cancel' },
    jp: { title:'タスク管理', todo:'未着手', doing:'進行中', done:'完了', dist:'分布', stat_status:'状態統計', stat_urgency:'緊急度統計', add_title:'⚡ 新規タスク', add_ph:'何をしますか？', btn_add:'追加', note_title:'メモ・アイデア', note_ph:'ここに入力...', btn_save:'保存', list_title:'タスク詳細', set_title:'設定', set_lang:'言語', set_backup:'バックアップ', btn_export:'出力', btn_import:'取込', set_font:'文字サイズ', set_radius:'角丸', set_color:'色設定', col_bg:'背景', col_card:'カード', btn_close:'完了', opt_p1:'🔴 重要・緊急', opt_p2:'🔵 重要・非緊急', opt_p3:'🟠 軽・緊急', opt_p4:'⚪ 普通', opt_work:'💼 仕事', opt_study:'📚 勉強', opt_life:'🏠 生活', opt_all_tag:'全タグ', opt_all_cat:'全分類', opt_all_sts:'全状態', btn_ocr:'文字認識', btn_img:'画像', btn_del:'削除', msg_del_task:'削除しますか？', msg_del_note:'削除しますか？', msg_enter_sub:'サブタスクを入力:', msg_enter_name:'ファイル名:', btn_confirm:'OK', btn_cancel:'キャンセル' },
    fr: { title:'Tableau de bord', todo:'À faire', doing:'En cours', done:'Fait', dist:'Distribution', stat_status:'Statut', stat_urgency:'Urgence', add_title:'Ajout rapide', add_ph:'Tâche...', btn_add:'Ajouter', note_title:'Notes', note_ph:'Écrivez ici...', btn_save:'Sauver', list_title:'Liste', set_title:'Paramètres', set_lang:'Langue', set_backup:'Sauvegarde', btn_export:'Exporter', btn_import:'Importer', set_font:'Taille police', set_radius:'Rayon', set_color:'Couleurs', col_bg:'Fond', col_card:'Carte', btn_close:'Fermer', opt_p1:'🔴 Imp & Urg', opt_p2:'🔵 Imp & Non Urg', opt_p3:'🟠 Non Imp & Urg', opt_p4:'⚪ Normal', opt_work:'💼 Travail', opt_study:'📚 Études', opt_life:'🏠 Vie', opt_all_tag:'Tous', opt_all_cat:'Tous', opt_all_sts:'Tous', btn_ocr:'OCR', btn_img:'Image', btn_del:'Suppr', msg_del_task:'Supprimer?', msg_del_note:'Supprimer?', msg_enter_sub:'Sous-tâche:', msg_enter_name:'Nom de fichier:', btn_confirm:'OK', btn_cancel:'Annuler' },
    es: { title:'Tablero', todo:'Por hacer', doing:'En curso', done:'Hecho', dist:'Distribución', stat_status:'Estado', stat_urgency:'Urgencia', add_title:'Añadir', add_ph:'Tarea...', btn_add:'Añadir', note_title:'Notas', note_ph:'Escriba aquí...', btn_save:'Guardar', list_title:'Lista', set_title:'Ajustes', set_lang:'Idioma', set_backup:'Respaldo', btn_export:'Exportar', btn_import:'Importar', set_font:'Tamaño fuente', set_radius:'Radio', set_color:'Colores', col_bg:'Fondo', col_card:'Tarjeta', btn_close:'Cerrar', opt_p1:'🔴 Imp & Urg', opt_p2:'🔵 Imp & No Urg', opt_p3:'🟠 No Imp & Urg', opt_p4:'⚪ Normal', opt_work:'💼 Trabajo', opt_study:'📚 Estudio', opt_life:'🏠 Vida', opt_all_tag:'Todos', opt_all_cat:'Todos', opt_all_sts:'Todos', btn_ocr:'OCR', btn_img:'Imagen', btn_del:'Borrar', msg_del_task:'¿Borrar?', msg_del_note:'¿Borrar?', msg_enter_sub:'Subtarea:', msg_enter_name:'Nombre de archivo:', btn_confirm:'OK', btn_cancel:'Cancelar' }
};
const COLORS = { p1:'#f54a45', p2:'#3370ff', p3:'#ff8800', p4:'#999', work:'#3370ff', study:'#9333ea', life:'#00b665', todo:'#ccc', doing:'#3370ff', done:'#00b665' };

/* --- 变量与状态 --- */
let tasks=[], notes=[], config={bgColor:'#f2f3f5', cardColor:'#ffffff', radius:12, font:1, lang:'zh', pcWidth:600, order:[], pinned:[], appTitle:'个人任务看板'};
let filters={tag:'all', cat:'all', status:'all'}, tempImg=null;

function init() {
    tryMigrate(); applyConfig(); setupDrag(); setupClock(); updateLang();
    renderSelect('sel-add-tag', getOpts('tag'), 'p4');
    renderSelect('sel-add-cat', getOpts('cat'), 'life');
    updateFilters();
    document.getElementById('note-input').addEventListener('paste', handlePaste);
    renderAll();
}

function tryMigrate() {
    if(localStorage.getItem('v7_tasks')) {
        tasks = JSON.parse(localStorage.getItem('v7_tasks'));
        notes = JSON.parse(localStorage.getItem('v7_notes'));
        config = {...config, ...JSON.parse(localStorage.getItem('v7_config'))};
        return;
    }
    const oldPrefixes = ['v6_', 'v5_', 'lifeos_', 'perfect_', 'final_'];
    for(let p of oldPrefixes) {
        const t=localStorage.getItem(p+'tasks');
        if(t) {
            tasks=JSON.parse(t);
            notes=JSON.parse(localStorage.getItem(p+'notes')||'[]');
            config={...config, ...JSON.parse(localStorage.getItem(p+'config')||'{}')};
            save(); break;
        }
    }
}

function renderAll() {
    document.title = config.appTitle; document.getElementById('app-title-input').value = config.appTitle;
    renderKPI(); renderCharts(); renderList(); renderNotes();
    document.querySelectorAll('.section-block').forEach(el => {
        el.classList.toggle('pinned', config.pinned.includes(el.id));
        const btn = el.querySelector('.pin-btn');
        if(btn) btn.innerText = config.pinned.includes(el.id) ? '🌟' : '📌';
    });
}

function getOpts(type) {
    const t=I18N[config.lang];
    if(type==='tag') return [{v:'p1',t:t.opt_p1,c:'bg-p1',col:COLORS.p1},{v:'p2',t:t.opt_p2,c:'bg-p2',col:COLORS.p2},{v:'p3',t:t.opt_p3,c:'bg-p3',col:COLORS.p3},{v:'p4',t:t.opt_p4,c:'bg-p4',col:COLORS.p4}];
    if(type==='cat') return [{v:'work',t:t.opt_work,c:'bg-work',col:COLORS.work},{v:'study',t:t.opt_study,c:'bg-study',col:COLORS.study},{v:'life',t:t.opt_life,c:'bg-life',col:COLORS.life}];
    if(type==='status') return [{v:'todo',t:t.todo,c:'bg-todo',col:COLORS.todo},{v:'doing',t:t.doing,c:'bg-doing',col:COLORS.doing},{v:'done',t:t.done,c:'bg-done',col:COLORS.done}];
    return [];
}

function updateFilters() {
    const t=I18N[config.lang];
    const mkF=(a,l)=>[{v:'all',t:l,c:'',col:'#ccc'}].concat(a);
    renderSelect('filter-tag', mkF(getOpts('tag'),t.opt_all_tag), filters.tag, v=>{filters.tag=v;renderList()});
    renderSelect('filter-cat', mkF(getOpts('cat'),t.opt_all_cat), filters.cat, v=>{filters.cat=v;renderList()});
    // 关键修复：KPI点击后，必须强制更新这里的选中状态显示
    renderSelect('filter-status', mkF(getOpts('status'),t.opt_all_sts), filters.status, v=>{filters.status=v;renderList()});
}

/* --- 自定义弹窗 --- */
let modalCallback = null;
function showCustomModal(titleKey, bodyHtml, callback, isInput=false, defaultVal='') {
    const t = I18N[config.lang];
    document.getElementById('modal-title').innerText = t[titleKey] || titleKey;
    const body = document.getElementById('modal-body');
    body.innerHTML = bodyHtml;
    
    document.querySelector('#custom-modal .btn-text').innerText = t.btn_cancel;
    document.querySelector('#custom-modal .btn-primary').innerText = t.btn_confirm;

    const modal = document.getElementById('custom-modal');
    modal.style.display = 'flex';
    
    if(isInput) {
        const input = document.getElementById('modal-input');
        if(input) { input.value = defaultVal; input.focus(); }
    }

    modalCallback = () => {
        if(isInput) {
            const val = document.getElementById('modal-input').value;
            if(val) callback(val);
        } else { callback(); }
        closeCustomModal();
    };
    document.getElementById('modal-confirm-btn').onclick = modalCallback;
}
function closeCustomModal(e) {
    if(!e || e.target.id === 'custom-modal' || e.target.getAttribute('data-i18n') === 'btn_cancel') {
        document.getElementById('custom-modal').style.display = 'none'; modalCallback = null;
    }
}

/* --- 交互逻辑 --- */
function updateAppTitle(val) { config.appTitle = val; document.title = val; save(); }

// 修复后的KPI点击逻辑：联动更新筛选器UI
function handleKPIClick(status) {
    filters.status = status;
    updateFilters(); // 这一步至关重要，让下拉框显示当前选中的状态
    if(!config.pinned.includes('sec-kpi')) config.pinned.push('sec-kpi');
    save(); renderAll();
    document.getElementById('sec-list').scrollIntoView({behavior:'smooth'});
}

function togglePin(id) {
    const idx = config.pinned.indexOf(id);
    if(idx > -1) config.pinned.splice(idx, 1);
    else config.pinned.push(id);
    save(); renderAll();
}

function addTask() {
    const title = document.getElementById('add-title').value;
    if(!title) return;
    const n = getNow();
    tasks.unshift({id:Date.now(), name:title, date:n.d, time:n.t, tag:document.getElementById('sel-add-tag').dataset.val, cat:document.getElementById('sel-add-cat').dataset.val, status:'todo', sub:[], showSub:false});
    document.getElementById('add-title').value=''; save(); renderAll();
}

function updateTask(i,k,v) { tasks[i][k]=v; const n=getNow(); tasks[i].date=n.d; tasks[i].time=n.t; save(); renderList(); }
function delTask(i) { showCustomModal('msg_del_task', '', () => { tasks.splice(i,1); save(); renderAll(); }); }
function promptSub(i) {
    showCustomModal('msg_enter_sub', '<input type="text" id="modal-input" style="width:100%" class="seamless-input" style="border:1px solid #ddd">', (val) => {
        tasks[i].sub.push({text:val, done:false}); tasks[i].showSub=true; save(); renderList();
    }, true);
}

/* --- OCR 优化：预压缩 + 状态反馈 --- */
async function doOCR() {
    if(!tempImg) return;
    const btn=document.getElementById('btn-ocr');
    const originalText = btn.innerHTML; // 保存原始按钮内容
    
    // 1. 设置加载状态
    btn.innerHTML = `<span>⏳</span>`; 
    btn.disabled = true;

    try {
        // 2. 压缩图片给 OCR (极大提升速度)
        // 注意：compressImage 返回 base64，直接传给 recognize
        // 使用 fast 模式或默认模式
        const {data:{text}} = await Tesseract.recognize(tempImg, config.lang==='zh'?'chi_sim':'eng');
        const optimizedText = text.replace(/([\u4e00-\u9fa5])\s+(?=[\u4e00-\u9fa5])/g, '$1');
        document.getElementById('note-input').value += '\n' + optimizedText;
    } catch(e){ 
        alert('Network Error / OCR Failed'); 
    }
    
    // 3. 恢复按钮
    btn.innerHTML = originalText;
    btn.disabled = false;
}

async function addNote(){const t=document.getElementById('note-input').value;if(!t&&!tempImg)return;try{const n=getNow();notes.unshift({id:Date.now(),text:t,img:tempImg,date:n.d,time:n.t});save();document.getElementById('note-input').value='';document.getElementById('note-preview-area').innerHTML='';tempImg=null;renderNotes();}catch(e){alert('Full');}}
function delNote(i) { showCustomModal('msg_del_note', '', () => { notes.splice(i,1); save(); renderNotes(); }); }

function promptExport() {
    const defaultName = "backup_" + getNow().d;
    showCustomModal('msg_enter_name', `<input type="text" id="modal-input" style="width:100%" value="${defaultName}" class="seamless-input" style="border:1px solid #ddd">`, (val) => {
        const b=new Blob([JSON.stringify({tasks,notes,config})],{type:'application/json'});
        const a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download=`${val}.json`; a.click();
    }, true, defaultName);
}

/* --- 渲染辅助 --- */
function renderKPI(){ 
    const cnt=s=>tasks.filter(t=>t.status===s).length; 
    document.getElementById('kpi-todo').innerText=cnt('todo'); document.getElementById('kpi-doing').innerText=cnt('doing'); document.getElementById('kpi-done').innerText=cnt('done');
}
function renderList() {
    const list=document.getElementById('task-list'); list.innerHTML='';
    const t = I18N[config.lang];
    let res=tasks.filter(t=>(filters.tag==='all'||t.tag===filters.tag)&&(filters.cat==='all'||t.cat===filters.cat)&&(filters.status==='all'||t.status===filters.status));
    res.sort((a,b)=>({doing:0,todo:1,done:2}[a.status]-{doing:0,todo:1,done:2}[b.status]||a.tag.localeCompare(b.tag)));
    res.forEach(task=>{
        const i=tasks.indexOf(task); const div=document.createElement('div'); div.className='task-item';
        div.innerHTML=`
            <div class="task-header">
                <input class="task-title-input seamless-input ${task.status==='done'?'done':''}" value="${task.name}" onchange="updateTask(${i},'name',this.value)">
                <button onclick="delTask(${i})" style="border:none;background:none;color:#ccc;cursor:pointer">${t.btn_del} ×</button>
            </div>
            <div class="task-meta"><span>📅 ${task.date}</span><span>⏰ ${task.time}</span></div>
            <div class="task-ctrls">
                <div class="custom-select mini-select" id="s-tag-${i}"></div><div class="custom-select mini-select" id="s-cat-${i}"></div><div class="custom-select mini-select" id="s-sts-${i}"></div>
                <button class="btn btn-text" style="border:1px solid #eee;font-size:0.8em" onclick="tasks[${i}].showSub=!tasks[${i}].showSub;renderList()">📋 ${task.sub.length}</button>
                <button class="btn btn-text" style="color:var(--blue);font-size:1.2em" onclick="promptSub(${i})">+</button>
            </div>
            ${task.sub&&task.sub.length?`<div class="subtasks ${task.showSub?'show':''}">${task.sub.map((s,si)=>`<div class="sub-item"><input type="checkbox" ${s.done?'checked':''} onchange="tasks[${i}].sub[${si}].done=!tasks[${i}].sub[${si}].done;save();renderList()"><input class="seamless-input" value="${s.text}" onchange="tasks[${i}].sub[${si}].text=this.value;save()" style="${s.done?'text-decoration:line-through;color:#ccc':''}"></div>`).join('')}</div>`:''}
        `;
        list.appendChild(div);
        renderSelect(`s-tag-${i}`,getOpts('tag'),task.tag,v=>updateTask(i,'tag',v));renderSelect(`s-cat-${i}`,getOpts('cat'),task.cat,v=>updateTask(i,'cat',v));renderSelect(`s-sts-${i}`,getOpts('status'),task.status,v=>updateTask(i,'status',v));
    });
}
function renderNotes() {
    const t = I18N[config.lang];
    document.getElementById('note-list').innerHTML=notes.map((n,i)=>`<div class="note-item"><div style="display:flex;justify-content:space-between;color:#999;font-size:0.8em;margin-bottom:5px"><span>${n.date} ${n.time}</span><span style="color:#ff4d4f;cursor:pointer" onclick="delNote(${i})">${t.btn_del}</span></div><textarea class="note-edit-area" onchange="notes[${i}].text=this.value;save()" rows="${n.text.split('\n').length||1}">${n.text}</textarea>${n.img?`<img src="${n.img}" class="note-thumb" onclick="document.getElementById('lightbox-img').src=this.src;document.getElementById('lightbox').style.display='flex'">`:''}</div>`).join('');
}
function renderCharts() {
    const calc=(arr,k)=>arr.reduce((a,c)=>{a[c[k]]=(a[c[k]]||0)+1;return a},{});
    const dTag=calc(tasks,'tag'), dCat=calc(tasks,'cat'), dSts=calc(tasks,'status');
    drawPie('pie-tag','leg-tag',dTag,getOpts('tag')); drawPie('pie-cat','leg-cat',dCat,getOpts('cat')); drawPie('pie-status','leg-status',dSts,getOpts('status'));
    drawBar('bar-status-chart','bar-status-leg',dSts,getOpts('status')); drawBar('bar-urgency-chart','bar-urgency-leg',dTag,getOpts('tag'));
}
function drawPie(cid,lid,data,opts){
    const t=tasks.length||1; let stops=[],c=0,leg='';
    opts.forEach(o=>{ if(data[o.v]){ const p=(data[o.v]/t)*100; stops.push(`${o.col} ${c}% ${c+p}%`); c+=p; } leg+=`<div class="legend-item"><div class="legend-color" style="background:${o.col}"></div><div>${o.t}</div></div>`; });
    document.getElementById(cid).style.background=stops.length?`conic-gradient(${stops.join(', ')})`:`conic-gradient(#eee 0% 100%)`; document.getElementById(lid).innerHTML=leg;
}
function drawBar(cid,lid,data,opts){
    const el=document.getElementById(cid), leg=document.getElementById(lid); el.innerHTML='';leg.innerHTML='';
    const max=Math.max(...Object.values(data))||1;
    opts.forEach(o=>{ const h=(data[o.v]||0)/max*100; el.innerHTML+=`<div class="bar-col"><div class="bar-fill" style="height:${h}%;bg:${o.col};background:${o.col}"></div></div>`; leg.innerHTML+=`<div class="legend-item"><div class="legend-color" style="background:${o.col}"></div><div>${o.t}</div></div>`; });
}

/* --- 底层通用 --- */
function getNow() { const n=new Date(); return {d:n.toISOString().split('T')[0], t:n.toTimeString().slice(0,5)}; }
function save() { localStorage.setItem('v7_tasks', JSON.stringify(tasks)); localStorage.setItem('v7_notes', JSON.stringify(notes)); localStorage.setItem('v7_config', JSON.stringify(config)); }
function setupClock(){setInterval(()=>document.getElementById('sys-clock').innerText=new Date().toLocaleTimeString(),1000);}
function setupDrag(){
    const con=document.getElementById('app-container'); let t,dragEl,sY;
    document.querySelectorAll('.section-block').forEach(el=>{
        el.addEventListener('touchstart',e=>{ if(['INPUT','TEXTAREA','BUTTON','SELECT'].includes(e.target.tagName)||e.target.closest('.custom-select'))return; sY=e.touches[0].clientY; t=setTimeout(()=>{dragEl=el;el.classList.add('dragging');navigator.vibrate?.(50)},600); },{passive:true});
        el.addEventListener('touchmove',e=>{ if(!dragEl&&Math.abs(e.touches[0].clientY-sY)>5){clearTimeout(t);return;} if(dragEl){ e.preventDefault();const touch=e.touches[0]; if(touch.clientY<50)window.scrollBy(0,-10);if(touch.clientY>window.innerHeight-50)window.scrollBy(0,10); const target=document.elementFromPoint(touch.clientX,touch.clientY)?.closest('.section-block'); if(target&&target!==dragEl&&con.contains(target)){ const all=[...con.children]; all.indexOf(dragEl)<all.indexOf(target)?target.after(dragEl):target.before(dragEl); } } },{passive:false});
        el.addEventListener('touchend',()=>{clearTimeout(t);if(dragEl){dragEl.classList.remove('dragging');config.order=[...con.children].map(c=>c.id);save();}dragEl=null;});
    });
    if(config.order)config.order.forEach(id=>con.appendChild(document.getElementById(id)));
}

// 关键修复：下拉框层级智能提升
function renderSelect(id,opts,val,cb){
    const el=document.getElementById(id);if(!el)return;
    const cur=opts.find(o=>o.v===val)||opts[0];
    el.innerHTML=`<div class="select-trigger ${cur.c}" onclick="toggleSelect('${id}')">${cur.t}</div><div class="select-options">${opts.map(o=>`<div class="select-option" onclick="selectOption('${id}','${o.v}')"><span style="width:8px;height:8px;border-radius:50%;background:${o.col};display:inline-block"></span>${o.t}</div>`).join('')}</div>`;
    el.dataset.val=val; el.onchangeCallback=cb;
}
function toggleSelect(id){
    const all = document.querySelectorAll('.select-options');
    const target = document.querySelector(`#${id} .select-options`);
    const isOpen = target.classList.contains('open');
    
    // 关闭所有，并复位 z-index
    all.forEach(e => {
        e.classList.remove('open');
        e.closest('.section-block')?.classList.remove('z-top');
    });

    if(!isOpen) {
        target.classList.add('open');
        // 核心：提升所在卡片的层级，防止被遮挡
        target.closest('.section-block')?.classList.add('z-top');
    }
}
function selectOption(id,v){const el=document.getElementById(id);el.dataset.val=v; toggleSelect(id); if(el.onchangeCallback)el.onchangeCallback(v);} // toggleSelect 会负责关闭和复位层级
document.addEventListener('click',e=>{
    if(!e.target.closest('.custom-select')) {
        document.querySelectorAll('.select-options').forEach(x=>x.classList.remove('open'));
        document.querySelectorAll('.section-block').forEach(x=>x.classList.remove('z-top'));
    }
});

function compressImage(f){return new Promise(r=>{const rd=new FileReader();rd.readAsDataURL(f);rd.onload=e=>{const img=new Image();img.src=e.target.result;img.onload=()=>{const cvs=document.createElement('canvas');const ctx=cvs.getContext('2d');const max=800;let w=img.width,h=img.height;if(w>max){h*=max/w;w=max;}cvs.width=w;cvs.height=h;ctx.drawImage(img,0,0,w,h);r(cvs.toDataURL('image/jpeg',0.7))}}})}
async function handleImgUpload(i){if(i.files[0]){tempImg=await compressImage(i.files[0]);document.getElementById('note-preview-area').innerHTML=`<img src="${tempImg}" class="note-thumb">`}}
async function handlePaste(e){for(let i of e.clipboardData.items)if(i.type.startsWith('image')){tempImg=await compressImage(i.getAsFile());document.getElementById('note-preview-area').innerHTML=`<img src="${tempImg}" class="note-thumb">`}}
function openSettings(){document.getElementById('settings-modal').style.display='flex';document.getElementById('width-range').value=config.pcWidth;document.getElementById('width-val').innerText=config.pcWidth;}
function closeSettings(){document.getElementById('settings-modal').style.display='none';save();}
function setPcWidth(v){config.pcWidth=v;document.getElementById('width-val').innerText=v;applyConfig();}
function setFont(v){config.font=v;applyConfig();}
function setRadius(v){config.radius=v;applyConfig();}
function setBgColor(v){config.bgColor=v;applyConfig();}
function setCardColor(v){config.cardColor=v;applyConfig();}
function changeLang(l){config.lang=l;updateLang();updateFilters();renderAll();save();}
function updateLang(){const t=I18N[config.lang];document.querySelectorAll('[data-i18n]').forEach(e=>e.innerText=t[e.dataset.i18n]);document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=t[e.dataset.i18nPh]);document.getElementById('lang-select').value=config.lang;}
function applyConfig(){
    const r=document.documentElement.style;
    r.setProperty('--bg-body',config.bgColor);r.setProperty('--bg-card',config.cardColor);
    r.setProperty('--radius',config.radius+'px');r.setProperty('--font-scale',config.font);
    r.setProperty('--pc-width',config.pcWidth+'px');
    document.getElementById('bg-color-picker').value=config.bgColor;
    document.getElementById('card-color-picker').value=config.cardColor;
    document.getElementById('radius-range').value=config.radius;
    document.getElementById('font-range').value=config.font;
}
function importData(i){const f=i.files[0];if(f){const r=new FileReader();r.onload=e=>{try{const d=JSON.parse(e.target.result);tasks=d.tasks||[];notes=d.notes||[];config={...config,...d.config};save();location.reload();}catch(x){alert('Err')}};r.readAsText(f);}}
function closeLightbox(){document.getElementById('lightbox').style.display='none'}

init();