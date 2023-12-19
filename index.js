
let myLeads = []

const inputEl = document.getElementById("input-el") 
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsLS = JSON.parse(localStorage.getItem("myLeads"))

if (leadsLS){
    myLeads = leadsLS
    render(myLeads)
}

const tabs = [
    {url: "linkedin.com"}
]

tabBtn.addEventListener("click", function(){
    console.log(tabs[0].url)
})

function render(leads){
    let listItems = ""

    for (let i = 0; i < leads.length; i++){
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>`       
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

 //alternate
    // let li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li) 