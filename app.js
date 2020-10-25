// let val=document;
// val=document.all;
// val=document.all[5];
// val=document.all.length;
// val=document.head;
// val=document.doctype;
// val=document.URL;
// val=document.characterSet;

// // CAN SELECT WITHOUT USING SELECTORS

// val=document.forms[0];
// val=document.forms[0].id;
// val=document.forms[0].method;
// val=document.forms[0].action;
// val=document.links;
// val=document.links[1];
// val=document.links[1].classList;
// val=document.images;
// val=document.scripts[2].src;
// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach(function(script)
// {
//     console.log(script.src);
// })
// console.log(scriptsArr);

// console.log(val); 

// ------------------------------------------------------------

// // SELECTORS BY SINGLE ELEMENT


// // document.getElementbyId();
// //can use className instead of id
// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').id);  

// const taskTitle = document.getElementById('task-title');

// // change styling
// taskTitle.style.color='black';
// taskTitle   .style.background='grey';
// taskTitle.style.textAlign='left';
// taskTitle.style.padding='5px';

// // change content
// //innerText can use instead of textContent
// taskTitle.textContent='Task List' 
// taskTitle.innerHTML='<span style="color:white">Task List</span>';


// // document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('h5'));
// console.log(document.querySelector('.collection-item'));
// console.log(document.querySelector('ul'));


// document.querySelector('li:last-child').style.color='green';
// document.querySelector('li:nth-child(2)').style.color='green';
// document.querySelector('li:nth-child(odd)').style.background='grey';
// document.querySelector('li:nth-child(4)').style.background='green';
// document.querySelector('li:nth-child(5)').textContent=`It's Done`;
// document.querySelector('i').style.color='green';



// // traversing the dom

// let val;
// const infoForm = document.querySelector('form');
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item');
// const listItemChild = document.querySelector('li.collection-item:nth-child(4)');

// // GET CHILD NODES
// val = listItem.children;
// val=list.childNodes[1].nodeType;
// val = list.children[1];
// list.children[1].textContent='hey this is 2nd node';  //to change the text value of the element

// val = list.children[3].children[0]; //to find children of children

// list.children[3].children[0].id='collect';


// // CHILD ELEMENT
// val = list.firstElementChild;
// val=list.childElementCount;

// // GET PARENT NODE
// // work as same
// val=listItem.parentElement;
// val1 = listItem.parentNode;


// // parent of parent
// val=listItem.parentElement.parentElement;

// // GET NEXT SIBLINGS  
// val=listItem.nextSibling;
// val=listItem.nextElementSibling;
// val=listItem.nextElementSibling.nextElementSibling.parentElement;

// // GET PREVIOUS SIBLING
// val=listItem.previousElementSibling; //bcoz it is first child can 't have previous sibling
// val=listItem.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling;


// console.log(val);


// ELEMENT CREATE

const li = document.createElement('li');

// insert id nd class to element
li.className = 'collection-item';
li.id= 'collect-item';
li.setAttribute('value' , 'new item');
li.appendChild(document.createTextNode('hello World'));

//create li as child ul
document.querySelector('ul.collection').appendChild(li);

// create link
const link = document.createElement('a');

// Add class
link.className = 'delete-item secondary-content';

// append icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);


console.log(li);









