let form = document.querySelector('form');
let inputs = form.querySelectorAll('input, textarea');
let isvalid;
let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
let validationrules = [];

function getErrors(input){
    if(input.value == ''){
        showError(input, `Please Enter ${input.name.charAt(0).toUpperCase() + input.name.slice(1)}`);
        isvalid = false;
    }
    else if(input.type == 'email' && !emailFormat.test(input.value)){
        showError(input, `Please Enter valid ${input.name.charAt(0).toUpperCase() + input.name.slice(1)}`);
        isvalid = false;
    }
    else if(input.type == 'password' &&  input.value.includes(' ')){
        showError(input, `spaces not allowed in ${input.name.charAt(0).toUpperCase() + input.name.slice(1)}`);
        isvalid = false;
    }
    else if(input.type == 'tel' && input.value.length !== input.maxLength){   
        showError(input, `Number should be atleast contains ${input.maxLength} numbers`);
        isvalid = false;
    }
    else{
        showError(input, ``);
    }
    
}

function showError(element, message){
    element.nextElementSibling.textContent = message;
}

console.log(inputs);
inputs.forEach((element)=>{
    element.addEventListener('input', function(){
        getErrors(element);
    })
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    isvalid = true;
    inputs.forEach((element)=>{
        getErrors(element);
    })
    if(!isvalid == false){
        form.submit();
    }
})