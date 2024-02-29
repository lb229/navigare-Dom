const html= document.documentElement;
console.log(html.innerText);

const htmlChildren = html.children;
console.log(htmlChildren)

const body= html.children[1];
console.log(body.innerText);

const ul= body.children[0];
console.log(ul.innerHTML);

const parentUl = ul.parentElement;
console.log('Elemento padre di ul:' + parentUl.tagName);

const myLi= ul.children[1];
console.log( 'Secondo elemento figlio di ul: ' +  myLi.innerText);

const myLiFirst= myLi.previousElementSibling;
console.log('Elemento fratello precedente del secondo li: ' + myLiFirst.innerText); 

const myLiNext= myLi.nextElementSibling;
console.log('Elemento fratello successivo del secondo li: ' + myLiNext.innerText)


