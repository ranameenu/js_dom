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

// console.log(val);