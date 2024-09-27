let buttons = document.querySelectorAll(".button");
let myInput = document.getElementById("myInput");
let inputString = '';
let array = Array.from(buttons);
array.forEach(buttons=>{
   buttons.addEventListener("click",(key)=>{
      inputString += key.target.innerHTML;
      myInput.value = inputString;
});
});
