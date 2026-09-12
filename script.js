'use strict';
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear()});
const progress=document.querySelector('.progress');
if(progress){const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'};addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update()}
