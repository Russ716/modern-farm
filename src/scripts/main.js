console.log("Welcome to the main module")
import { addPlant, usePlants, usePlants } from "./field.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js"
let yearlyPlan = createPlan()
console.log(yearlyPlan);
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)
addPlant(asparagusSeed)
let fieldPlants = usePlants()
console.log(fieldPlants);