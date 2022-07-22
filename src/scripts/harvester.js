let seedObjectsArray = []
//In this module, define and export a harvestPlants function.
export const harvestPlants = (plantsArray) => {
    //^The harvestPlants function must accept the plants array as input.
    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            for (let index = 0; index < (plant.output / 2); index++) {
                seedObjectsArray.push(plant)
            }
        } else {
            for (let index = 0; index < plant.output; index++) {
                seedObjectsArray.push(plant)
            }
        }

    }
    return seedObjectsArray //^The function will return an array of seed objects.
}
//Iterate the array of growing plants. On each plant, get the value of the output property.
//Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
