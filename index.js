const characters =["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c"
,"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{",
"[","}","]",",","|",":",";","<",">",".","?",
"/"];


function randomize(){
    let randomize=Math.floor(Math.random()* characters.length)
    return characters[randomize]
}


function generate() {
    let passwordLength=document.querySelector('input').value;
    let password=""
    
    for(let i=0;i<passwordLength;i++){
         password+=randomize()
    }
    return password
}

function display() {
    let password=document.getElementById("password1")
    let password2=document.getElementById("password2")
    password.textContent="Password 1: " +generate()
    password2.textContent="Password 2: "+ generate()
}
