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



export {addNewInterest, getInterest}