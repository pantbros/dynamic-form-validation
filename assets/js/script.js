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
    else if (input.type === 'tel') {
        const value = input.value.trim(); // Optional: if you're worried about leading/trailing spaces
        const isOnlyDigits = /^[0-9]+$/.test(value);
        const isCorrectLength = value.length === parseInt(input.maxLength);
        if (!isOnlyDigits) {
            showError(input, "Phone number should contain digits only");
            isvalid = false;
        } else if (!isCorrectLength) {
            showError(input, `Number should contain exactly ${input.maxLength} digits`);
            isvalid = false;
        } else {
            showError(input, ``);
        }
        console.log(isvalid);
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