console.log("This is all working fine and dandy-like.")

// Your job is to sign each of these promising young music stars to the appropriate label. Create an array for each of these record labels.

// JumpStop Records works with Funk and Rap artists.
const JumpStopRecords = [] 
// Chatten Records works with Country and Bluegrass artists.
const ChattenRecords = []
// Polar Records works with Pop artists.
const PolarRecords = []

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

const createFunkAndRapArtist = (name, age) => {
    return {    
        name: name,
        age: age
    }
}

const createCountryAndBluegrassArtist = (name, age) => {
    return {    
        name: name,
        age: age
    }   
}

const createPopArtist = (name, age) => {
    return {    
        name: name,
        age: age
    }
}

const Bruce = createCountryAndBluegrassArtist("Brue Atkins", 23)
ChattenRecords.push(Bruce)

const Jensen = createFunkAndRapArtist("Jensen Brown", 20)
JumpStopRecords.push(Jensen)

const Dre = createFunkAndRapArtist("Dre Funkz", 21)
JumpStopRecords.push(Dre)

const Bart = createCountryAndBluegrassArtist("Bartholomew Danielson", 23)
ChattenRecords.push(Bart)

const Avilee = createCountryAndBluegrassArtist("Avilee Dallas", 19) 
ChattenRecords.push(Avilee)

const Austin = createPopArtist("Austin Kinkaid", 22)
PolarRecords.push(Austin)

const Loyoncé = createFunkAndRapArtist("Loyoncé Branis", 27)
JumpStopRecords.push(Loyoncé)

console.table("Polar Records", PolarRecords)
console.table("Jump Stop Records", JumpStopRecords)
console.table("Chatten Records", ChattenRecords)


