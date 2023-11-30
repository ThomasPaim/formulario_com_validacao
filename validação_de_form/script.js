const inputs = document.querySelectorAll('.required')
const span = document.querySelectorAll('.span-required')
const form = document.getElementById('form')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    nomeValido();
    emailValidate();
    passwordValidate();
    comparar();
})

function setError(index){
    inputs[index].style.border = "3px solid red";
    span[index].style.display = "block";

    
}

function setAccept(index){
    inputs[index].style.border = "";
    span[index].style.display = "none";
}

function nameValidate() {
    if (!(inputs[0].value.length >= 3)) {
        console.log('Nome inválido');
        setError(0);
    } else {
        console.log('Nome válido');
        setAccept(0);
    }
}

function emailValidate(){
    if(emailRegex.test(inputs[1].value)){
        setAccept(1)
    }else{
        setError(1);
    }
}

function passwordValidate(){
     if(inputs[2].value.length < 8){
        setError(2)
     }else{
        setAccept(2)
        comparePassword();
     }
}

function comparePassword(){

    if(inputs[2].value == inputs[3].value){
        setAccept(3);
    }else{
        setError(3);
    }

}