// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

const createDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}
const doctor = createDoctor("Joseph", "Pediatritian", "Nashville")
console.log(doctor)

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const BowWowKennels = []

const Briley = createPet("Briley", "Golden Retriever")
BowWowKennels.push(Briley)

const Atticus = createPet("Atticus", "Tabby Cat")
BowWowKennels.push(Atticus)

const Trevor = createPet("Trevor", "The Fish")
BowWowKennels.push(Trevor)
console.log(BowWowKennels)