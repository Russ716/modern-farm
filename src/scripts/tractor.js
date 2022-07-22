import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
let listPlants = usePlants()

//In this module, define and export a plantSeeds function.
export const plantSeeds = (plantingPlan) => {
    //^The function must accept the year's planting plan as input (i.e. it must define a parameter).
    //The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
    for (const row of plantingPlan) {
        //^As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
        for (const plant of row) {
            if (plant === "Asparagus") {
                listPlants.push(addPlant(createAsparagus()))
                //^Take that seed and add it to the array of plants in the field module.
            } else if (plant === "Corn") {
                listPlants.push(addPlant(createCorn()))
            } else if (plant === "Potato") {
                listPlants.push(addPlant(createPotato()))
            } else if (plant === "Soybean") {
                listPlants.push(addPlant(createSoybean()))
            } else if (plant === "Sunflower") {
                listPlants.push(addPlant(createSunflower()))
            } else listPlants.push(addPlant(createWheat()))
        }
    }
}
