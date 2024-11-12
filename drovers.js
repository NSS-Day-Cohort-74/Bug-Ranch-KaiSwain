const { database } = require("./database.js")
const cattleToDrive = 50
const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers

    const numberNeeded =  cattleToDrive / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.round(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }
    return drovers
    
}

module.exports = { hireDrovers }

//random drovers function 