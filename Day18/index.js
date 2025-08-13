console.log("Dom Manupulaton");

const divElm = document.getElementById("p");
// creating Elements

const h1 = document.createElement("h1");
h1.innerText = "Hello World";
document.body.appendChild(h1);

//Insert Elements

const span = document.createElement("span");
span.innerText = "This is span";
const pElm = document.querySelector("p");
console.log(pElm);
divElm.insertBefore(span, pElm);
//document.body.appendChild(span)

// Removing Element

{
    let listELm = document.getElementById("list");
    const remove= listELm.children[0];
    listELm.removeChild(remove);
    console.log(listELm.children);

}

{
    // *Traversing DOM

    // parentElement ans parentnode

    const span = document.getElementById('text');
    console.log("parent Element", span.parentElement.parentElement);
    console.log("Parent Node", span.parentNode.parentNode);

    // Children and ChildNodes

    const mainElm = document.getElementById("main-id");
    //console.log("Children", mainElm.children);
    //console.log("ChildrenNode", mainElm.childNodes);

    //console.log("First Child", mainElm.firstChild);
    //console.log("First Child", mainElm.firstElementChild);
    //console.log("Last Child", mainElm.lastElementChild);

    //nextSibling
    const h1Elem = document.getElementById("something-id2");
    console.log("Next Sibling", h1Elem.nextSibling);
    
    //nextElementSibling
    console.log("Next Sibling", h1Elem.nextElementSibling);

    // previousSibling
    console.log("Next Sibling", h1Elem.previousSibling);

    //previousElementSibling
    console.log("Next Sibling", h1Elem.previousElementSibling);

}
const btnElm = document.getElementById("btn");
const mainDiv = document.getElementById("main-id1");

btnElm.addEventListener("click", ()=>{
    mainDiv.classList.toggle("main-class2");
    mainDiv.classList.toggle("main-class");
    //btnElm.classList.add("main-class2");
    //btnElm.classList.remove("main-class");
    //btnElm.style.backgroundColor = "blue";
})