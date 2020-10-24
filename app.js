let val=document;
val=document.all;
val=document.all[5];
val=document.all.length;
val=document.head;
val=document.doctype;
val=document.URL;
val=document.characterSet;

// CAN SELECT WITHOUT USING SELECTORS

val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].method;
val=document.forms[0].action;
val=document.links;
val=document.links[1];
val=document.links[1].classList;
val=document.images;
val=document.scripts[2].src;
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script)
{
    console.log(script.src);
})
console.log(scriptsArr);

console.log(val); 

------------------------------------------------------------

// SELECTORS BY SINGLE ELEMENT


// document.getElementbyId();
//can use className instead of id
console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);  

const taskTitle = document.getElementById('task-title');

// change styling
taskTitle.style.color='black';
taskTitle   .style.background='grey';
taskTitle.style.textAlign='left';
taskTitle.style.padding='5px';

// change content
//innerText can use instead of textContent
taskTitle.textContent='Task List' 
taskTitle.innerHTML='<span style="color:white">Task List</span>';





