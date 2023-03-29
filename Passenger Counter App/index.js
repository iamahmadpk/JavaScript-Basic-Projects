let count=0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
function increment(){
    count += 1;
    countEl.innerText = count;
    
}
function save(){
    //if we use innerText here it will skip the spaces between the elements
    saveEl.textContent += count+" - ";   
    //on save set the count variable as 0, so the next increment start from 0 to onwards
    count = countEl.innerText=0;
}