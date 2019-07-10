import {addNewInterest, getInterest} from "./api.js"

// let italySection = document.getElementById("italy")
// let switzSection = document.getElementById("switz")
// let franceSection = document.getElementById("france")



// function listInterests() {

// }

// function listInterests(interest) {
//     let elem = document.createElement("div")
//     let li1 = document.createElement("li")
//     let li2 = document.createElement("li")
//     let li3 = document.createElement("li")
//     let li4 = document.createElement("li")
//     let div = document.createElement("div")
//     let editBtn = document.createElement("button")
//     let deleteBtn = document.createElement("button")
//     elem.appendChild(li1)
//     elem.appendChild(li2)
//     elem.appendChild(li3)
//     elem.appendChild(li4)
//     elem.appendChild(div)
//     elem.appendChild(editBtn)
//     elem.appendChild(deleteBtn)

//     editBtn.textContent = "Edit"
//     deleteBtn.textContent = "Delete"

//     li1.innerHTML = `Name of Place: ${interest.name}`
//     li2.innerHTML = `Description: ${interest.description}`
//     li3.innerHTML = `Cost: ${interest.cost}`
//     li4.innerHTML =  `Review: ${interest.review}`


// }

console.log("hello")



let italySection = document.getElementById("italyInterest")

createAllInterests()

function createAllInterests() {
    italySection.appendChild(createNewInterest())
}

function createNewInterest() {
   let elem = document.createElement("div")
   let div = document.createElement("div")
   let div2 = document.createElement("div")
   let createBtn = document.createElement("button")
   elem.appendChild(createBtn)
   elem.appendChild(div)
   elem.appendChild(div2)

   div.innerHTML = `<h2>Italy</h2>`
    div2.setAttribute("id", "italyInterest")

   createBtn.textContent = "Create a New Interest"

   createBtn.addEventListener("click", () => {
       let createForm = createNewInterests()
       addNewInterestToDOM(div2.id, createForm)
   })

    return elem
}




function createNewInterests() {
    return `
    <input id="name" name="name_of_place" type="text" placeholder="name of interest">
    <select type="text" id="country">
        <option value="1">Italy</option>
        <option value="2">Switzerland</option>
        <option value="3">France</option>
    <input id="description" name="description_of_place" type="text" placeholder="description of interest">
    <input id="cost" name="cost_of_place" type="text" placeholder="cost of interest">
    <input id="review" name="review_of_place" type="text" placeholder= "review of interest">
    <button id="saveInterest-btn">Save Interest</button>
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
    })
}


function buildInterestObject(placeIdVal, nameVal, descriptionVal, costVal, reviewVal) {
    return {
      placeId: parseInt(placeIdVal),
      name: nameVal,
      description: descriptionVal,
      cost: parseInt(costVal),
      review:  reviewVal,
    }
}