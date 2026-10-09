'use strict';
(() => {
  const translations={title:'好奇心を、<span>ふわりと。</span>',description:'今日の理解を記録し、明日の問いに出会う。<br>バブルを選んで、学びを始める。',journal:'社会学<br>学習記録',journalMeta:'4件の記録 · 第1章のマインドマップ',sociology:'社会学<br>用語解説',sociologyMeta:'243用語 · 中文 / 日本語',international:'国際政治<br>用語解説',internationalMeta:'中国語版 · 大学・年度別の出題記録',enter:'開く <span aria-hidden="true">↗</span>',footnote:'概念を起点に、理解をつなげる。',languages:'検索 · お気に入り · 復習',replay:'バブルの動きを再生 ↻',home:'← ホームへ'};
  const targets=[...document.querySelectorAll('[data-learning-ui]')].map(el=>({el,zh:el.innerHTML,ja:translations[el.dataset.learningUi]}));
  function setLanguage(lang){const ja=lang==='ja';targets.forEach(t=>t.el.innerHTML=ja?t.ja:t.zh);document.documentElement.lang=ja?'ja':'zh-CN';document.title=ja?'学習 · 复调':'学习 · 复调';document.querySelectorAll('[data-learning-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.learningLang===lang)));document.querySelector('.learning-bubbles').setAttribute('aria-label',ja?'学習コンテンツを選ぶ':'选择学习板块');document.querySelector('.learning-language').setAttribute('aria-label',ja?'学習入口の言語切り替え':'学习入口语言切换');try{localStorage.setItem('polyphony-sociology-language',lang)}catch{}}
  document.querySelectorAll('[data-learning-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.learningLang)));
  let lang='zh';try{lang=localStorage.getItem('polyphony-sociology-language')==='ja'?'ja':'zh'}catch{}setLanguage(lang);
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const cluster=document.querySelector('.learning-bubbles');
  const bubbles=[...cluster.querySelectorAll('.study-bubble,.study-orb')];
  const running=new Set();
  let introWait=null;
  function enterBubbles(){
    running.forEach(a=>a.cancel());running.clear();
    if(motion.matches||typeof cluster.animate!=='function')return;
    cluster.classList.add('is-entering');
    const sequence=['.orb-green','.bubble-journal','.bubble-sociology','.orb-violet','.bubble-international'];
    sequence.forEach((selector,i)=>{
      const el=cluster.querySelector(selector),rect=el.getBoundingClientRect();
      const x=[65,95,-90,-70,12][i],rise=Math.max(260,innerHeight-rect.top+rect.height*.55);
      const animation=el.animate([
        {opacity:0,transform:`translate3d(${x}px,${rise}px,0) scale(.72)`,offset:0,easing:'cubic-bezier(.16,.7,.24,1)'},
        {opacity:1,transform:`translate3d(${-x*.12}px,-23px,0) scale(1.045)`,offset:.68,easing:'cubic-bezier(.3,0,.5,1)'},
        {opacity:1,transform:`translate3d(${x*.025}px,8px,0) scale(.987)`,offset:.86,easing:'cubic-bezier(.22,1,.36,1)'},
        {opacity:1,transform:'translate3d(0,0,0) scale(1)',offset:1}
      ],{duration:1750,delay:i*105,fill:'backwards'});
      running.add(animation);animation.finished.then(()=>{running.delete(animation);if(!running.size)cluster.classList.remove('is-entering')},()=>{running.delete(animation)});
    });
  }
  function startWhenVisible(){
    if(document.body.classList.contains('modal-open')){introWait=new MutationObserver(()=>{if(!document.body.classList.contains('modal-open')){introWait.disconnect();introWait=null;enterBubbles()}});introWait.observe(document.body,{attributes:true,attributeFilter:['class']})}
    else requestAnimationFrame(enterBubbles);
  }
  document.querySelector('#replay-bubbles').addEventListener('click',enterBubbles);
  motion.addEventListener('change',()=>{if(motion.matches){running.forEach(a=>a.cancel());running.clear();cluster.classList.remove('is-entering')}});
  addEventListener('pagehide',()=>{introWait?.disconnect();running.forEach(a=>a.cancel());running.clear();cluster.classList.remove('is-entering')});
  addEventListener('pageshow',event=>{if(event.persisted)startWhenVisible()});
  startWhenVisible();
})();
