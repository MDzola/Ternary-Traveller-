


function buildInterestObject(placeIdVal, nameVal, descriptionVal, costVal, reviewVal) {
    return {
      placeId: parseInt(placeIdVal),
      name: nameVal,
      description: descriptionVal,
      cost: parseInt(costVal),
      review:  reviewVal,
    }
}



export {buildInterestObject}