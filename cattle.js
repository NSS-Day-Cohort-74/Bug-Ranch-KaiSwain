const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    

    for (let counter = 0; counter > herdSize.id; counter++) {
        const types = herdSize[counter].breed
        cattle.push(types)
    }
    
    return cattle
}

module.exports = { roundup }

//array of types