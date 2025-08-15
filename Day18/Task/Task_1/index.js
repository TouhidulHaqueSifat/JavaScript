const fieldElm = document.getElementById("fieldType");

const addFieldBtn = document.getElementById("addField");

const FormElm = document.getElementById("dynamicForm");

const formFields = document.getElementById("formFields");
const resetBtn = document.getElementById("resetBtn");

addFieldBtn.addEventListener("click", function (e) {
  e.preventDefault();

  
  const input = document.createElement("input");
  input.setAttribute("type", fieldType.value);
  input.setAttribute("placeholder", `Enter ${fieldType.value}`);
  

  
  formFields.appendChild(input);
});

FormElm.addEventListener("submit", function(e){
    e.preventDefault();
    let inputs = document.querySelectorAll("input");
    data = {};

    inputs.forEach((input,index) =>{
        data[`fields ${index + 1}`] = input.value;
    })
    console.log("Form Data:", data);
});

resetBtn.addEventListener("click", function () {
    let inputs = document.querySelectorAll("input");

    inputs.forEach((input) =>{
        input.value = "";
    })

});

    
  
