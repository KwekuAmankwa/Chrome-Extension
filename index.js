
let myLeads = ["kweku","asamoah"]

const inputEl = document.getElementById("input-el") 
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
})

let listItems = ""

for (let i = 0; i < myLeads.length; i++){
    listItems += "<li>" + myLeads[i] + "</li>" 

    //alternate
    // let li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)  
}
ulEl.innerHTML = listItems