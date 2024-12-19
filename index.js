let generator = document.getElementById("generator");
let toogleSymbols = document.getElementById("toogleSymbols");
let toogleNumbers = document.getElementById("toogleNumbers");
let passwordFirst = document.getElementById("passwordFirst");
let passwordSecond = document.getElementById("passwordSecond");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let filteredCharacters =[...characters];

generator.addEventListener("click",generate);
toogleSymbols.addEventListener("click",addClassSymbol);
toogleNumbers.addEventListener("click",addClassNumber);


function generate(){
  filteredCharacters = [...characters];
  if(toogleSymbols.classList.contains("active")){
    filterSymbols();
  }
  if(toogleNumbers.classList.contains("active")){
    filterNumbers();
  }
  passwordFirst.textContent="";
  passwordSecond.textContent="";

  for (let i = 0; i < 9; i++){
    let randomFirst = Math.floor(Math.random()*filteredCharacters.length);
    passwordFirst.textContent += filteredCharacters[randomFirst];
  }
  for (let i = 0; i < 9; i++){
    let randomSecond = Math.floor(Math.random()*filteredCharacters.length);
    passwordSecond.textContent += filteredCharacters[randomSecond];
  }
  if(toogleNumbers.classList.contains("active")){
  toogleNumbers.classList.remove("active");}
  if(toogleSymbols.classList.contains("active")){
  toogleSymbols.classList.remove("active");}
}


function filterSymbols(){
    filteredCharacters = filteredCharacters.filter(char => !/[~`!@#$%^&*()_\-+={}[\]|:;"'<>,.?/]/.test(char));
}

function filterNumbers(){
    filteredCharacters = filteredCharacters.filter(char => !/[0123456789]/.test(char));
}
function addClassNumber(){
  toogleNumbers.classList.toggle("active");
}
function addClassSymbol(){
  toogleSymbols.classList.toggle("active");
}

