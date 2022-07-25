console.log("Welcome to the main module")
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
let yearlyPlan = createPlan()
console.log(yearlyPlan);
const asparagusSeed = createAsparagus()
const seedCorn = createCorn()
const seedPotato = createPotato()
const seedSoybean = createSoybean()
const seedSunflower = createSunflower()
const seedWheat = createWheat()
//console.log(asparagusSeed)
//addPlant(asparagusSeed)
//addPlant(seedCorn)
plantSeeds(yearlyPlan)
let fieldPlants = usePlants()
console.log(fieldPlants);
let plantsToMarket = harvestPlants(fieldPlants)
let plantsForSale = []

for (const plant of plantsToMarket) {
    plantsForSale.push(plant.type + " ")
}
document.querySelector(".harvester").innerHTML = plantsForSale;

//!Now just play with display: flex and make it look right. 