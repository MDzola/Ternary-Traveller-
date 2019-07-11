import {getInterest, deleteInterest, updatedInterest} from "./api.js"
import { createInterests } from "./createNewInterest.js";
import {buildInterestObject} from "./helpers.js"

let italySection = document.getElementById("italy")
let switzSection = document.getElementById("switz")
let franceSection = document.getElementById("france")

createInterests()
listInterests()



function listInterests() {
    getInterest()
    .then( interestData => {
        interestData.forEach( interest => {
            if (interest.placeId === 1) {
                italySection.appendChild(createListInterests(interest))
            }
            if (interest.placeId === 2) {
                switzSection.appendChild(createListInterests(interest))
            }
            if (interest.placeId === 3) {
                franceSection.appendChild(createListInterests(interest))
            }
        })
    })
}



function createListInterests(interest) {
    let elem = document.createElement("div")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let div = document.createElement("div")
    let editBtn = document.createElement("button")
    let deleteBtn = document.createElement("button")
    elem.appendChild(li1)
    elem.appendChild(li2)
    elem.appendChild(li3)
    elem.appendChild(li4)
    elem.appendChild(div)
    elem.appendChild(editBtn)
    elem.appendChild(deleteBtn)


    div.setAttribute("id", `editFormContainer-${interest.id}`)

    editBtn.textContent = "Edit"
    deleteBtn.textContent = "Delete"

    li1.innerHTML = `Name of Place: ${interest.name}`
    li2.innerHTML = `Description: ${interest.description}`
    li3.innerHTML = `Cost: $${interest.cost}`
    li4.innerHTML =  `Review: ${interest.review}`

    deleteBtn.addEventListener("click", () => {
        let choice = confirm("Do you really want to DELETE?")

        if (choice === true) {
        deleteInterest(interest.id)
        .then( data => {
           location.reload()
        })
    }
        else{
            location.reload()
        }
    })

    editBtn.addEventListener("click", () => {
        let editForm = createEditForm(interest)
        addEditFormToDom(div.id, editForm)
    })

    return elem

}


    function createEditForm(interest) {
        return `
        <input id="interest-id" type="hidden" value=${interest.id}>
        <input id="place-id" type="hidden" value=${interest.placeId}>
        <div><input id="name" name="name_of_place" type="hidden" placeholder="name of interest" value =${interest.name}></div>
        <div><input id="description" name="description_of_place" type="hidden" placeholder="description of interest" value=${interest.description}></div>
        <div><input id="cost" name="cost_of_place" type="text" placeholder="cost of interest" value=${interest.cost}></div>
        <div><input id="review" name="review_of_place" type="text" placeholder= "review of interest" value=${interest.review}></div>
        <button id="save-edit-btn">Save the Edit</button>
        `
    }

    function addEditFormToDom(editContainer, form ) {
        document.getElementById(`${editContainer}`).innerHTML = form
        document.getElementById("save-edit-btn").addEventListener("click", () => {
            let interestId = document.getElementById("interest-id").value
            let placeId = document.getElementById("place-id").value
            let name = document.getElementById("name").value
            let description = document.getElementById("description").value
            let cost = document.getElementById("cost").value
            let review = document.getElementById("review").value
            let updateInterest = buildInterestObject(placeId, name, description, cost, review)
            updateInterest.id = interestId
            updatedInterest(updateInterest)
            .then ( () => {
                location.reload()
            })
        })
    }


