const toLowercase = document.getElementById("lowercase")
const toUpppercase = document.getElementById("uppercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")
let submit = document.getElementById("submit")


submit.onclick = function(){
    lenghtPass = document.getElementById("length").value;
    lenghtPass = parseInt(lenghtPass);
    console.log(lenghtPass)
    if(lenghtPass <= 0 || isNaN(lenghtPass)){
        document.getElementById("GenPassword").textContent = "Enter a valid length of the password";
        return;
    }
    if(toLowercase.checked == false && toUpppercase.checked == false && numbers.checked == false && symbols.checked == false ){
        document.getElementById("GenPassword").textContent = "check atlease one checkbox";
        return;
    }
    let Lc = "abcdefghijklmnopqrstuvwxyz";
    let Uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let symbolsarr = "!@#$%^&*_+/;:";

    let allowedChar = "";
    let actualPass = "";

    allowedChar += toLowercase.checked ? Lc : "";
    allowedChar += toUpppercase.checked ? Uc : "";
    allowedChar += numbers.checked ? num : "";
    allowedChar += symbols.checked ? symbolsarr : "";

    for(let i = 0; i < lenghtPass; i++){
        let Rchar = Math.floor(Math.random() * allowedChar.length);
        actualPass += allowedChar.charAt(Rchar);
    }

    document.getElementById("GenPassword").textContent = document.getElementById("GenPassword").textContent + actualPass;
}



