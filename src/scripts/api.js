function addNewInterest(Interest) {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Interest)
    })
}



function getInterest() {
    return fetch("http://localhost:8088/interests")
    .then (interestData => interestData.json())
}


function deleteInterest(id) {
    return fetch(`http://localhost:8088/interests/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}


function updatedInterest(interest) {
    return fetch(`http://localhost:8088/interests/${interest.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(interest)
    })
}

export {addNewInterest, getInterest, deleteInterest, updatedInterest}