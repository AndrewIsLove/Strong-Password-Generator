function generatePassword(){
    let password = "";
    const length = document.getElementById("length").value;
    const IncludeUpperCase = document.getElementById("uppercase").checked;
    const IncludeLowerCase = document.getElementById("lowercase").checked;
    const IncludeNumbers = document.getElementById("numbers").checked;
    const IncludeSymbols = document.getElementById("symbols").checked;

    let UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let Numbers = "0123456789";
    let Symbols = "!@#$%^&*()_+-={}:<>?";

    var CharacterPool="";
    if(IncludeUpperCase) CharacterPool+=UpperCaseLetters;
    if(IncludeLowerCase) CharacterPool+=LowerCaseLetters;
    if(IncludeNumbers) CharacterPool
    +=Numbers;
    if(IncludeSymbols) CharacterPool
    +=Symbols;

    if(CharacterPool===""){
        alert("Please select atleast one option")
        return;
    }

    for(let i=0;i<length;i++){
        let RandomIndex = Math.floor(Math.random()*CharacterPool.length);
        password += CharacterPool[RandomIndex];
    }
    document.getElementById("password").value =password;
}