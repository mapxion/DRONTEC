
'use strict';
const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
const closeMenu=()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');};
menuButton.addEventListener('click',()=>{const isOpen=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));});
navigation.querySelectorAll('a').forEach(link=>{link.addEventListener('click',closeMenu);if(link.getAttribute('href')===location.pathname.split('/').pop())link.setAttribute('aria-current','page');});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
window.matchMedia('(min-width: 801px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelector('#year').textContent=String(new Date().getFullYear());
