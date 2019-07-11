import {addNewInterest} from "./api.js"
import {buildInterestObject} from "./helpers.js"

let newInterestSection = document.getElementById("newInterest")


function createInterests() {
    newInterestSection.appendChild(createNewInterest())
}

function createNewInterest() {
   let elem = document.createElement("div")
   let div = document.createElement("div")
   let createBtn = document.createElement("button")
   elem.appendChild(createBtn)
   elem.appendChild(div)

    div.setAttribute("id", "newInt")

   createBtn.textContent = "Create a New Interest"

   createBtn.addEventListener("click", () => {
       let createForm = createNewInterests()
       addNewInterestToDOM(div.id, createForm)

   })


    return elem
}


function createNewInterests() {
    return `
    <select type="text" id="country">
        <option value="1">Italy</option>
        <option value="2">Switzerland</option>
        <option value="3">France</option>
    <div><input id="name" name="name_of_place" type="text" placeholder="name of interest"></div>
    <div><input id="description" name="description_of_place" type="text" placeholder="description of interest"></div>
    <div><input id="cost" name="cost_of_place" type="text" placeholder="cost of interest"></div>
    <div><input id="review" name="review_of_place" type="text" placeholder= "review of interest"></div>
    <div><button id="saveInterest-btn">Save Interest</button></div>
    `
}

function addNewInterestToDOM(createContainer, createForm) {
    document.getElementById(`${createContainer}`).innerHTML = createForm
    document.getElementById("saveInterest-btn").addEventListener("click", () => {
        let place = document.getElementById("country").value
        let name  = document.getElementById("name").value
        let description = document.getElementById("description").value
        let cost = document.getElementById("cost").value
        let review = document.getElementById("review").value
        let newInterest = buildInterestObject(place, name, description, cost, review)
        addNewInterest(newInterest)
        .then (data => {
            location.reload()
        })
    })
}


export {createInterests}