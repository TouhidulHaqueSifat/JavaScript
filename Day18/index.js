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

