'use strict';
(() => {
  const categories = {
    theory: {zh:'经典与现代理论',ja:'古典・現代理論'},
    interaction: {zh:'互动与社会心理',ja:'相互行為・社会心理'},
    culture: {zh:'文化与传媒',ja:'文化・メディア'},
    methods: {zh:'社会调查与研究方法',ja:'社会調査・研究方法'},
    inequality: {zh:'分层、教育与福祉',ja:'階層・教育・福祉'},
    family: {zh:'家族、性别与人口',ja:'家族・ジェンダー・人口'},
    community: {zh:'地域、城市与移民',ja:'地域・都市・移民'},
    organization: {zh:'组织、劳动与政治',ja:'組織・労働・政治'},
    'social-problems': {zh:'越轨与社会问题',ja:'逸脱・社会問題'},
    modernity: {zh:'现代性与全球社会',ja:'近代性・グローバル社会'}
  };
  const ui = {
    zh: {
      skip:'跳至正文',journal:'学习日志',map:'思维导图',home:'首页 ↗',title:'社会学名词解释',subtitle:'把概念，连成理解。',begin:'开始查词 ↓',
      description:'面向修士入试与日常学习的中日双语词库。<br>从一句定义出发，接上学者、例子与概念的边界。',terms:'个词条',categories:'个领域',mastered:'已掌握',
      answerKicker:'不止记住名字 / 写出解释',answerTitle:'让答案有一条完整的线。',answer1:'定义：它解释什么现象？',answer2:'学者：谁在什么论述中使用它？',answer3:'机制与例子：它怎样运作？',answer4:'区别：它不等同于哪个邻近概念？',
      answerNote:'同志社 2026 年度秋期公开题要求结合学者或著作与具体例。词条是答题提纲，篇幅与论证应按实际题目展开。',
      schoolTitle:'目标校与公开资料',scope:'覆盖通用基础与地域、文化、福祉等方向；不把某次出现的术语当成固定考纲。标有「公开题例」的词条附具体题目链接。',browserTitle:'查词与复习',clear:'清空',random:'抽一词 ↗',categoryLabel:'领域',statusLabel:'范围',recall:'背诵模式',readNote:'展开词条，查看完整解释。',recallNote:'先看名词，尝试解释，再展开核对。',more:'显示更多词条 ↓',
      localNote:'收藏与掌握状态只保存在当前浏览器，不上传到服务器。',sourceTitle:'编写依据与延伸阅读',sourceNote:'解释为本站整理的学习提纲；例子用于说明概念，除明确标注外不代表已验证的个案研究。每个词条均链接到相关教材、学术原文或课程资料。',back:'← 回到社会学学习日志',copyright:'© 2026 复调 · 持续学习，持续修正。',top:'回到顶部 ↑',
      flashcardKicker:'RECALL / 先试着解释',reveal:'查看解释',hide:'收起解释',markMastered:'标记已掌握',unmarkMastered:'已掌握 ✓ / 撤销',next:'下一词 →',allCategories:'全部领域',all:'全部词条',saved:'已收藏',unmastered:'待复习',exam:'公开题例',save:'收藏 ☆',unsave:'已收藏 ★',mark:'标记掌握',unmark:'已掌握 ✓',permalink:'词条链接 ↗',scholar:'相关学者 / 理论脉络',example:'例子',distinction:'易混点 / 边界',related:'关联概念',source:'参考资料',searchPlaceholder:'搜索中文、日文、英文或学者',searchLabel:'搜索词条',languageLabel:'词库语言切换',navLabel:'主导航',closeLabel:'关闭抽词卡片',empty:'没有找到匹配词条。试试另一种语言、学者名，或调整筛选范围。',loading:'正在载入词库…',error:'词库暂未载入，请刷新页面重试。',count:(a,b)=>`找到 ${a} 个词条 · 已显示 ${b} 个`,sourceLink:'官方资料 ↗'
    },
    ja: {
      skip:'本文へ',journal:'学習記録',map:'マインドマップ',home:'ホーム ↗',title:'社会学用語解説',subtitle:'概念を、理解につなぐ。',begin:'用語を探す ↓',
      description:'大学院入試と日々の学習のための中日二言語の用語集。<br>定義に研究者、具体例、概念の境界を結びつける。',terms:'用語',categories:'領域',mastered:'習得済み',
      answerKicker:'名前を覚える、その先へ',answerTitle:'説明に、一本の筋を通す。',answer1:'定義：どのような現象を説明するか。',answer2:'研究者：誰が、どの議論で用いたか。',answer3:'仕組みと例：どう働くか。',answer4:'区別：近い概念と何が違うか。',
      answerNote:'同志社大学の2026年度秋期公開問題では、研究者・著作への言及と具体例が求められた。各項目は答案の骨子であり、分量と論証は実際の設問に合わせて展開する。',
      schoolTitle:'志望校と公開資料',scope:'共通の基礎と地域・文化・福祉などの領域を扱う。過去の一題を固定的な出題範囲とみなさない。「公開出題例」の項目には該当する問題へのリンクを付す。',browserTitle:'用語検索と復習',clear:'消去',random:'一語を引く ↗',categoryLabel:'領域',statusLabel:'範囲',recall:'暗記モード',readNote:'項目を開いて解説を読む。',recallNote:'用語を見て説明を考え、開いて確認する。',more:'さらに表示 ↓',
      localNote:'お気に入りと習得状況はこのブラウザーだけに保存され、サーバーに送信されない。',sourceTitle:'編纂資料と発展的な読書',sourceNote:'解説は当サイトで整理した学習用の骨子である。例は概念の説明用で、明記した場合を除き検証済みの事例研究ではない。各項目に関連する教材・原著・講義資料へのリンクを付す。',back:'← 社会学の学習記録に戻る',copyright:'© 2026 复调 · 学び、理解を更新する。',top:'ページ上部へ ↑',
      flashcardKicker:'RECALL / まず説明してみる',reveal:'解説を見る',hide:'解説を隠す',markMastered:'習得済みにする',unmarkMastered:'習得済み ✓ / 取り消す',next:'次の用語 →',allCategories:'全領域',all:'全項目',saved:'お気に入り',unmastered:'未習得',exam:'公開出題例',save:'お気に入り ☆',unsave:'登録済み ★',mark:'習得済みにする',unmark:'習得済み ✓',permalink:'項目リンク ↗',scholar:'関連する研究者 / 理論',example:'具体例',distinction:'混同しやすい点 / 限界',related:'関連概念',source:'参考資料',searchPlaceholder:'中国語・日本語・英語・研究者名で検索',searchLabel:'用語を検索',languageLabel:'用語集の言語切り替え',navLabel:'主なナビゲーション',closeLabel:'復習カードを閉じる',empty:'該当する項目がない。別の言語や研究者名を試すか、絞り込み条件を変えてください。',loading:'用語集を読み込んでいます…',error:'用語集を読み込めませんでした。ページを再読み込みしてください。',count:(a,b)=>`${a}項目が該当 · ${b}項目を表示`,sourceLink:'公式資料 ↗'
    }
  };
  const schoolNotes = [
    {name:'滋賀県立大学',url:'https://www.shc.usp.ac.jp/region/graduate-school/',zh:'地域文化学强调以多种研究方法理解日本、亚洲的地域社会与文化。可把地域、文化概念与田野调查方法一起复习。',ja:'地域文化学は多様な方法で日本・アジアの地域社会と文化を研究する。地域・文化概念をフィールドワークの方法と併せて学ぶ。'},
    {name:'同志社大学',url:'https://ss.doshisha.ac.jp/files/shajm/page/7.shakai_zenki_ryugakusei26FAL.pdf',zh:'已核对 2026 年度秋、春期外国人留学生社会学题例：理论、统计与研究方法均有出现。秋期要求定义之外结合学者或著作及具体例。',ja:'2026年度秋・春期の外国人留学生社会学問題を確認。理論、統計、研究方法の出題例がある。秋期は定義に加えて研究者・著作と具体例を求める。'},
    {name:'京都府立大学',url:'https://www.kpu.ac.jp/graduate/exam/exam/',zh:'社会科学研究科含公共政策学与福祉社会学。社会学、社会福祉、地域与人的发展可相互联系；具体选拔科目须对照当年度要项。',ja:'社会科学研究科には公共政策学・福祉社会学がある。社会学、社会福祉、地域、人間形成を関連づけて学び、受験科目は当年度の要項で確認する。'}
  ];
  const $ = selector => document.querySelector(selector);
  const escape = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = value => String(value).normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
  const safeURL = value => /^https?:\/\//.test(value) ? escape(value) : '#';
  const state = {lang:'zh',category:'all',status:'all',query:'',limit:24,recall:false};
  let terms=[],sources=[],sourceMap=new Map(),termMap=new Map(),filtered=[],flashTerm=null,loadState='loading';
  let review={saved:new Set(),mastered:new Set()};
  try {
    state.lang=localStorage.getItem('polyphony-sociology-language')==='ja'?'ja':'zh';
    const stored=JSON.parse(localStorage.getItem('polyphony-sociology-review-v1')||'{}');
    review={saved:new Set(Array.isArray(stored.saved)?stored.saved:[]),mastered:new Set(Array.isArray(stored.mastered)?stored.mastered:[])};
  } catch { /* The glossary also works without persistent storage. */ }
  function saveReview() {
    try {localStorage.setItem('polyphony-sociology-review-v1',JSON.stringify({saved:[...review.saved],mastered:[...review.mastered]}));} catch { /* Optional storage. */ }
  }
  function fields(term) {
    const copy=ui[state.lang],lang=state.lang;
    const related=(term.related||[]).map(id=>termMap.get(id)).filter(Boolean);
    return `<div class="term-content"><p class="term-definition">${escape(term.definition[lang])}</p><dl><dt>${copy.scholar}</dt><dd>${escape(term.scholar[lang])}</dd><dt>${copy.example}</dt><dd>${escape(term.example[lang])}</dd><dt>${copy.distinction}</dt><dd class="term-distinction">${escape(term.distinction[lang])}</dd>${related.length?`<dt>${copy.related}</dt><dd class="term-related">${related.map(t=>`<a href="#term-${escape(t.id)}" data-related="${escape(t.id)}">${escape(t[lang])}</a>`).join('')}</dd>`:''}</dl><div class="term-source-links">${(term.sources||[]).map(id=>sourceMap.get(id)).filter(Boolean).map(s=>`<a href="${safeURL(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.title)} ↗</a>`).join('')}${(term.exam||[]).map(e=>`<a href="${safeURL(e.url)}" target="_blank" rel="noopener noreferrer">${escape(e.label)} ↗</a>`).join('')}</div></div>`;
  }
  function card(term,openIDs) {
    const copy=ui[state.lang],primary=term[state.lang],secondary=term[state.lang==='zh'?'ja':'zh'];
    return `<details class="term-card" id="term-${escape(term.id)}"${openIDs.has(term.id)?' open':''}><summary><div class="term-card-top"><span class="term-category">${escape(categories[term.category][state.lang])}</span><span class="term-flags">${term.exam?.length?`<span class="term-flag exam-flag">${copy.exam}</span>`:''}${review.saved.has(term.id)?`<span class="term-flag">★</span>`:''}${review.mastered.has(term.id)?`<span class="term-flag">✓ ${copy.mastered}</span>`:''}</span></div><span class="term-card-toggle" aria-hidden="true">＋</span><h3>${escape(primary)}</h3><p class="term-secondary"><span lang="${state.lang==='zh'?'ja':'zh-CN'}">${escape(secondary)}</span> · ${escape(term.en)}</p><p class="term-preview">${escape(term.definition[state.lang])}</p></summary>${fields(term)}<div class="term-content"><div class="term-actions"><button type="button" data-save="${escape(term.id)}" aria-pressed="${review.saved.has(term.id)}">${review.saved.has(term.id)?copy.unsave:copy.save}</button><button type="button" data-master="${escape(term.id)}" aria-pressed="${review.mastered.has(term.id)}">${review.mastered.has(term.id)?copy.unmark:copy.mark}</button><a href="#term-${escape(term.id)}" data-related="${escape(term.id)}">${copy.permalink}</a></div></div></details>`;
  }
  function render() {
    const active=document.activeElement;
    const focusAction=active?.dataset?.save?{type:'save',id:active.dataset.save}:active?.dataset?.master?{type:'master',id:active.dataset.master}:null;
    const openIDs=new Set([...document.querySelectorAll('.term-card[open]')].map(e=>e.id.slice(5)));
    const parts=normalize(state.query).split(' ').filter(Boolean);
    filtered=terms.filter(t=>(state.category==='all'||t.category===state.category)&&parts.every(p=>t.search.includes(p))&&(state.status==='all'||(state.status==='saved'&&review.saved.has(t.id))||(state.status==='mastered'&&review.mastered.has(t.id))||(state.status==='unmastered'&&!review.mastered.has(t.id))||(state.status==='exam'&&t.exam?.length)));
    const visible=filtered.slice(0,state.limit);
    $('#glossary-results').innerHTML=visible.map(t=>card(t,openIDs)).join('');
    $('#result-count').textContent=ui[state.lang].count(filtered.length,visible.length);
    $('#empty-state').hidden=filtered.length!==0;
    $('#empty-state').textContent=ui[state.lang].empty;
    $('#load-more').hidden=visible.length>=filtered.length;
    $('#random-term').disabled=filtered.length===0;
    $('#mastered-count').textContent=terms.filter(t=>review.mastered.has(t.id)).length;
    $('#clear-search').hidden=state.query.length===0;
    $('.glossary-browser').classList.toggle('is-recall',state.recall);
    $('#recall-mode').setAttribute('aria-pressed',String(state.recall));
    $('#mode-description').textContent=ui[state.lang][state.recall?'recallNote':'readNote'];
    if(focusAction){
      const replacement=document.querySelector(`[data-${focusAction.type}="${focusAction.id}"]`);
      if(replacement)replacement.focus({preventScroll:true});
      else {$('#result-count').tabIndex=-1;$('#result-count').focus({preventScroll:true});}
    }
  }
  function language(lang) {
    state.lang=lang==='ja'?'ja':'zh';
    const copy=ui[state.lang];
    document.documentElement.lang=state.lang==='ja'?'ja':'zh-CN';
    document.title=`${copy.title} · 复调`;
    document.querySelectorAll('[data-ui]').forEach(e=>{e.innerHTML=copy[e.dataset.ui]||e.innerHTML;});
    document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===state.lang)));
    $('.glossary-language').setAttribute('aria-label',copy.languageLabel);
    $('#glossary-nav').setAttribute('aria-label',copy.navLabel);
    $('.flashcard-close').setAttribute('aria-label',copy.closeLabel);
    $('#term-search').placeholder=copy.searchPlaceholder;
    $('#term-search').setAttribute('aria-label',copy.searchLabel);
    $('#category-filter').innerHTML=`<option value="all">${copy.allCategories}</option>`+Object.entries(categories).map(([id,c])=>`<option value="${id}">${escape(c[state.lang])}</option>`).join('');
    $('#category-filter').value=state.category;
    $('#status-filter').innerHTML=['all','saved','unmastered','mastered','exam'].map(id=>`<option value="${id}">${copy[id]}</option>`).join('');
    $('#status-filter').value=state.status;
    $('#school-notes').innerHTML=schoolNotes.map(n=>`<section class="glossary-school-card"><h3>${escape(n.name)}</h3><p>${escape(n[state.lang])}</p><a href="${safeURL(n.url)}" target="_blank" rel="noopener noreferrer">${copy.sourceLink}</a></section>`).join('');
    try {localStorage.setItem('polyphony-sociology-language',state.lang);} catch { /* Optional storage. */ }
    if (terms.length) render();
    else $('#result-count').textContent=copy[loadState==='error'?'error':'loading'];
    if(flashTerm) showFlashTerm(flashTerm,false);
  }
  function openTerm(id) {
    if(!termMap.has(id)) return;
    state.query='';state.category='all';state.status='all';
    $('#term-search').value='';$('#category-filter').value='all';$('#status-filter').value='all';
    state.limit=Math.max(24,Math.ceil((terms.findIndex(t=>t.id===id)+1)/24)*24);
    render();
    const el=document.getElementById(`term-${id}`);
    el.open=true;
    el.querySelector('summary').focus({preventScroll:true});
    el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
    history.replaceState(null,'',`#term-${id}`);
  }
  function toggleReview(type,id) {
    if(!termMap.has(id))return;
    if(review[type].has(id))review[type].delete(id);else review[type].add(id);
    saveReview();render();
    if(flashTerm)updateFlashStatus();
  }
  function updateFlashStatus() {
    const mastered=review.mastered.has(flashTerm.id);
    $('#flashcard-mastered').textContent=ui[state.lang][mastered?'unmarkMastered':'markMastered'];
    $('#flashcard-mastered').setAttribute('aria-pressed',String(mastered));
  }
  function showFlashTerm(term,reset=true) {
    flashTerm=term;
    $('#flashcard-prompt').innerHTML=`<h2 id="flashcard-title">${escape(term[state.lang])}</h2><p class="term-secondary">${escape(term[state.lang==='zh'?'ja':'zh'])} · ${escape(term.en)}</p>`;
    $('#flashcard-answer').innerHTML=fields(term);
    if(reset)$('#flashcard-answer').hidden=true;
    $('#reveal-answer').textContent=ui[state.lang][$('#flashcard-answer').hidden?'reveal':'hide'];
    updateFlashStatus();
  }
  function randomTerm() {
    const pool=filtered.length>1?filtered.filter(t=>t.id!==flashTerm?.id):filtered;
    if(!pool.length)return;
    showFlashTerm(pool[Math.floor(Math.random()*pool.length)]);
    if(!$('#flashcard').open){document.body.classList.add('modal-open');$('#flashcard').showModal();}
    $('#reveal-answer').focus();
  }
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>language(b.dataset.lang)));
  let searchTimer;
  $('#term-search').addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{state.query=$('#term-search').value;state.limit=24;render();},120);});
  $('#clear-search').addEventListener('click',()=>{clearTimeout(searchTimer);state.query='';$('#term-search').value='';state.limit=24;render();$('#term-search').focus();});
  $('#category-filter').addEventListener('change',e=>{state.category=e.target.value;state.limit=24;render();});
  $('#status-filter').addEventListener('change',e=>{state.status=e.target.value;state.limit=24;render();});
  $('#load-more').addEventListener('click',()=>{const firstNew=state.limit;state.limit+=24;render();document.querySelectorAll('.term-card > summary')[firstNew]?.focus({preventScroll:true});});
  $('#recall-mode').addEventListener('click',()=>{state.recall=!state.recall;if(state.recall)document.querySelectorAll('.term-card[open]').forEach(d=>d.open=false);render();});
  $('#random-term').addEventListener('click',randomTerm);
  $('#next-term').addEventListener('click',randomTerm);
  $('#reveal-answer').addEventListener('click',()=>{$('#flashcard-answer').hidden=!$('#flashcard-answer').hidden;$('#reveal-answer').textContent=ui[state.lang][$('#flashcard-answer').hidden?'reveal':'hide'];});
  $('#flashcard-mastered').addEventListener('click',()=>toggleReview('mastered',flashTerm.id));
  $('#flashcard').addEventListener('close',()=>document.body.classList.remove('modal-open'));
  document.addEventListener('click',event=>{
    const save=event.target.closest('[data-save]'),master=event.target.closest('[data-master]'),related=event.target.closest('[data-related]');
    if(save)toggleReview('saved',save.dataset.save);
    if(master)toggleReview('mastered',master.dataset.master);
    if(related){event.preventDefault();if($('#flashcard').open)$('#flashcard').close();openTerm(related.dataset.related);}
  });
  $('#glossary-results').addEventListener('toggle',e=>{if(e.target.matches('.term-card'))e.target.querySelector('.term-card-toggle').textContent=e.target.open?'−':'＋';},true);
  language(state.lang);
  fetch('sociology-terms.json?v=20261009').then(response=>{if(!response.ok)throw new Error('Glossary unavailable');return response.json();}).then(data=>{
    loadState='ready';sources=data.sources;sourceMap=new Map(sources.map(s=>[s.id,s]));
    terms=data.terms.map(t=>({...t,search:normalize([t.zh,t.ja,t.en,t.scholar.zh,t.scholar.ja,...(t.aliases||[]),t.definition.zh,t.definition.ja].join(' '))}));
    termMap=new Map(terms.map(t=>[t.id,t]));
    $('#total-count').textContent=terms.length;
    $('#category-count').textContent=new Set(terms.map(t=>t.category)).size;
    $('#source-list').innerHTML=sources.map(s=>`<li><a href="${safeURL(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.title)} ↗</a></li>`).join('');
    language(state.lang);
    if(location.hash.startsWith('#term-'))openTerm(decodeURIComponent(location.hash.slice(6)));
  }).catch(error=>{loadState='error';$('#result-count').textContent=ui[state.lang].error;console.error(error);});
})();
