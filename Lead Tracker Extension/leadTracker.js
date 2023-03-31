//adding EventListner instead of onlick method in html
let myLead = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
console.log(ulEl)

inputBtn.addEventListener("click", function(){
    //insert into array and getting the input from input box
    myLead.push(inputEl.value);
    //clear out input field
    inputEl.value = "";
    renderLeads();
    //console.log(myLead);
    
})
/*
for(let i = 0; i < myLead.length; i++){
   // ulEl.innerHTML += "<li>" + myLead[i]+ " "+ "</li>";
   //works same as above
   
   const li = document.createElement("li");
   li.textContent = myLead[i];
   ulEl.append(li);
}*/
function renderLeads(){
let listItem = "";
for(let j=0; j< myLead.length; j++){
    //listItem +="<li><a target = '_blank' href = '"+myLead[j]+ "'>" + myLead[j] + "</a></li>";
    listItem +=
    `<li>
        <a target = '_blank' href = '${myLead[j]} '>${myLead[j]} </a>
    </li>`;
    //console.log(listItem)
}
ulEl.innerHTML = listItem;
}