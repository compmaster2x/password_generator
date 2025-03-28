const passwordG = document.getElementById("password")
const length = 16;

const uL = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lL = "qwertyuiopasdfghjklzxcvbnm";
const n = "1234567890";
const s = "!@#$%^&*()_+";

const mix = uL + lL + n + s;



function generateRandPass(){
    let password = "";
    while(length > password.length){
        password += mix.charAt(Math.floor(Math.random() * mix.length))
    }
    passwordG.value = password
}

function copyPassword(){
    passwordG.select();
    document.execCommand("copy");
}