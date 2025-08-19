const buttonElm = document.getElementById("themeToggle");
const body = document.body;

let savedTheme = localStorage.getItem("theme");
    
    if(savedTheme){
      if(savedTheme === "dark"){
        body.classList.add("dark");
      }
      
    }
    else{
      
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.add("dark");
      }
      
    }

buttonElm.addEventListener("click", ()=>{
    

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
    console.log("Pressed");
});


