'use strict';
// Native touch scrolling stays intact; wheel easing follows the system motion preference.
(() => {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let lenis=null;
  let observer=null;
  const animations=new Set();
  function modalState(){
    if(!lenis)return;
    if(document.body.classList.contains('modal-open'))lenis.stop();else lenis.start();
  }
  const modalObserver=new MutationObserver(modalState);
  modalObserver.observe(document.body,{attributes:true,attributeFilter:['class']});
  function setupScroll(){
    if(lenis){lenis.destroy();lenis=null}
    if(!reduced.matches && typeof window.Lenis==='function'){
      lenis=new window.Lenis({autoRaf:true,lerp:.09,smoothWheel:true,syncTouch:false,anchors:{offset:0},stopInertiaOnNavigate:true,prevent:node=>Boolean(node.closest?.('dialog,.contents,.chart-scroll,.table-scroll,[data-lenis-prevent]'))});
      modalState();
    }
  }
  function animate(el,frames,options){
    if(reduced.matches || typeof el.animate!=='function')return;
    const a=el.animate(frames,{duration:850,easing:'cubic-bezier(.22,1,.36,1)',...options});
    animations.add(a);a.finished.then(()=>animations.delete(a),()=>animations.delete(a));
  }
  function reveal(){
    if(observer)observer.disconnect();
    if(reduced.matches || !('IntersectionObserver' in window))return;
    observer=new IntersectionObserver(entries=>{
      entries.forEach(({target,isIntersecting})=>{
        if(!isIntersecting)return;
        observer.unobserve(target);
        animate(target,[{opacity:0,transform:'translate3d(0,32px,0)'},{opacity:1,transform:'translate3d(0,0,0)'}]);
      });
    },{threshold:0,rootMargin:'0px 0px -32px 0px'});
    document.querySelectorAll('.feature,.research,.author-panel,.wang-feature,.essay-card,.photo-series-head,.photo-card,.archive-figure,.film-figure,.data-figure,.prose h2,.report-card,.editorial-heading,.journal-card,.home-photo-content,.closing-note,.reading-related').forEach(el=>{
      if(el.getBoundingClientRect().top>innerHeight*.9)observer.observe(el);
    });
  }
  setupScroll();reveal();
  const back=performance.getEntriesByType('navigation')[0]?.type==='back_forward';
  if(!location.hash && !back && scrollY<100){
    document.querySelectorAll('.hero > *,.hero-copy > *,.hero-composition,.reading-head > *').forEach((el,i)=>animate(el,[{opacity:0,transform:'translate3d(0,22px,0)'},{opacity:1,transform:'translate3d(0,0,0)'}],{duration:950,delay:60+i*65,fill:'backwards'}));
  }
  reduced.addEventListener('change',()=>{animations.forEach(a=>a.cancel());setupScroll();reveal()});
  addEventListener('pageshow',()=>{lenis?.resize();modalState()});
})();
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear()});
// One scheduled update per frame for the header, reading progress and current chapter.
(() => {
  const nav=document.querySelector('.nav'),progress=document.querySelector('.progress');
  const article=document.querySelector('article.prose');
  const chapterLinks=Array.from(document.querySelectorAll('.contents a[href^="#"]'));
  const chapters=chapterLinks.map(link=>({link,section:document.getElementById(decodeURIComponent(link.hash.slice(1)))})).filter(item=>item.section);
  let pending=false,active=null;
  function update(){
    pending=false;nav?.classList.toggle('is-scrolled',scrollY>18);
    if(progress&&article){
      const rect=article.getBoundingClientRect(),start=rect.top+scrollY-130;
      const distance=Math.max(1,rect.height-innerHeight+160);
      progress.style.width=Math.max(0,Math.min(100,(scrollY-start)/distance*100))+'%';
    }
    let current=null;
    for(const item of chapters){if(item.section.getBoundingClientRect().top<=180)current=item;else break}
    if(current!==active){
      active?.link.removeAttribute('aria-current');current?.link.setAttribute('aria-current','location');active=current;
    }
  }
  function schedule(){if(!pending){pending=true;requestAnimationFrame(update)}}
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule);
  addEventListener('pageshow',schedule);
  if(article&&'ResizeObserver' in window)new ResizeObserver(schedule).observe(article);
  update();
})();

(() => {
  const seenKey='polyphony-introduction-v1';
  const dialog=document.createElement('dialog');
  dialog.className='intro-dialog';
  dialog.setAttribute('aria-labelledby','intro-title');
  dialog.setAttribute('aria-describedby','intro-description');
  dialog.innerHTML=`<button class="intro-close" type="button" aria-label="关闭介绍">×</button><div class="intro-content"><p class="eyebrow">复调 / POLYPHONY</p><h2 id="intro-title">写作，是把习以为常的世界，<span>重新变成一个问题。</span></h2><p class="intro-philosophy">我们不必拥有相同的答案，<br>但可以在彼此的文字里，重新理解人的处境。</p><p id="intro-description" class="intro-description">这里是 <strong>Misaka10320</strong> 与 <strong>花間堂 / florahals</strong> 共同发表文章的地方。我们分别写下文化研究、文学评论与社会观察，也用摄影记录城市、山水与夜空。<br>两种声音，各自成文；在此相遇。</p><button class="intro-enter" type="button" autofocus>进入复调</button><p class="intro-note">让阅读，成为另一场思考。</p></div>`;
  document.body.append(dialog);
  if(typeof dialog.showModal!=='function'){dialog.remove();document.querySelectorAll('[data-open-intro]').forEach(button=>button.hidden=true);return}
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  let closing=false;
  let returnFocus=null;
  let backdropStarted=false;
  const remember=()=>{try{sessionStorage.setItem(seenKey,'1')}catch{}};
  function show(trigger){
    if(dialog.open || closing)return;
    returnFocus=trigger||null;
    dialog.classList.remove('is-closing');
    document.body.classList.add('modal-open');
    dialog.showModal();
  }
  function close(){
    if(!dialog.open||closing)return;
    closing=true;remember();
    const finish=()=>{
      dialog.close();dialog.classList.remove('is-closing');document.body.classList.remove('modal-open');closing=false;
      if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});
      else {const main=document.querySelector('main');if(main){main.tabIndex=-1;main.focus({preventScroll:true});main.addEventListener('blur',()=>main.removeAttribute('tabindex'),{once:true})}}
    };
    if(reduce.matches)finish();else{dialog.classList.add('is-closing');setTimeout(finish,240)}
  }
  dialog.querySelector('.intro-close').addEventListener('click',close);
  dialog.querySelector('.intro-enter').addEventListener('click',close);
  dialog.addEventListener('cancel',event=>{event.preventDefault();close()});
  const outside=event=>{const r=dialog.getBoundingClientRect();return event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom};
  dialog.addEventListener('pointerdown',event=>{backdropStarted=outside(event)});
  dialog.addEventListener('click',event=>{if(backdropStarted&&outside(event))close();backdropStarted=false});
  // Keep keyboard navigation inside the introduction while it is open.
  dialog.addEventListener('keydown',event=>{
    if(event.key!=='Tab')return;
    const items=Array.from(dialog.querySelectorAll('button:not([disabled])'));
    const first=items[0],last=items[items.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
  });
  document.querySelectorAll('[data-open-intro]').forEach(button=>button.addEventListener('click',()=>show(button)));
  let seen=false;try{seen=sessionStorage.getItem(seenKey)==='1'}catch{}
  if(!seen)show();
})();

(() => {
  const photos=Array.from(document.querySelectorAll('[data-photo]'));
  if(!photos.length || typeof HTMLDialogElement==='undefined')return;
  const dialog=document.createElement('dialog');
  dialog.className='photo-lightbox';dialog.setAttribute('aria-label','Misaka10320 摄影作品');dialog.setAttribute('data-lenis-prevent','');
  dialog.innerHTML='<button type="button" class="lightbox-close" aria-label="关闭大图">×</button><div class="lightbox-stage"><img alt=""><p class="lightbox-status" role="status">正在载入照片…</p></div><div class="lightbox-bar"><button type="button" class="lightbox-prev" aria-label="上一张照片">←</button><p class="lightbox-caption" aria-live="polite"></p><button type="button" class="lightbox-next" aria-label="下一张照片">→</button></div>';
  document.body.append(dialog);
  if(typeof dialog.showModal!=='function'){dialog.remove();return}
  const img=dialog.querySelector('img'),caption=dialog.querySelector('.lightbox-caption'),status=dialog.querySelector('.lightbox-status');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let index=0,trigger=null,closing=false;
  function display(next){
    index=(next+photos.length)%photos.length;
    const photo=photos[index];img.hidden=true;status.hidden=false;status.textContent='正在载入照片…';
    img.alt=photo.dataset.caption;caption.textContent=`${photo.dataset.caption}　${index+1} / ${photos.length}`;
    img.src=photo.href;
  }
  img.addEventListener('load',()=>{
    img.hidden=false;status.hidden=true;
    if(!reduced.matches)img.animate([{opacity:0,transform:'scale(.985)'},{opacity:1,transform:'scale(1)'}],{duration:420,easing:'cubic-bezier(.22,1,.36,1)'});
    const preload=new Image();preload.src=photos[(index+1)%photos.length].href;
  });
  img.addEventListener('error',()=>{status.hidden=false;status.textContent='照片暂时无法载入，请切换后重试。'});
  function close(){
    if(closing || !dialog.open)return;closing=true;
    const finish=()=>{dialog.close();dialog.classList.remove('is-closing');document.body.classList.remove('modal-open');closing=false;trigger?.focus({preventScroll:true})};
    if(reduced.matches)finish();else{dialog.classList.add('is-closing');setTimeout(finish,220)}
  }
  photos.forEach((photo,n)=>photo.addEventListener('click',event=>{
    if(event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)return;
    event.preventDefault();trigger=photo;display(n);document.body.classList.add('modal-open');dialog.showModal();
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click',close);
  dialog.querySelector('.lightbox-prev').addEventListener('click',()=>display(index-1));
  dialog.querySelector('.lightbox-next').addEventListener('click',()=>display(index+1));
  dialog.addEventListener('cancel',event=>{event.preventDefault();close()});
  dialog.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'){event.preventDefault();display(index-1)}
    if(event.key==='ArrowRight'){event.preventDefault();display(index+1)}
  });
  let startX=0,startY=0;
  const stage=dialog.querySelector('.lightbox-stage');
  stage.addEventListener('touchstart',event=>{if(event.touches.length===1){startX=event.touches[0].clientX;startY=event.touches[0].clientY}},{passive:true});
  stage.addEventListener('touchend',event=>{const t=event.changedTouches[0];if(!t || event.touches.length)return;const dx=t.clientX-startX,dy=t.clientY-startY;if(Math.abs(dx)>65 && Math.abs(dx)>Math.abs(dy)*1.5)display(index+(dx<0?1:-1))},{passive:true});
})();
