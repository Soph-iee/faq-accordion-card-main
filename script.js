
'use strict'
const accordionQuestions = document.querySelectorAll ('.accordion-container')

accordionQuestions.forEach(item => { item.addEventListener ('click', ()=> {
    item.classList.toggle('active');})});


 /* color: var(--TextVerydarkgrayishblue); */
   
    /* font-weight: lighter; */