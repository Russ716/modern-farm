import { harvestPlants } from "./harvester"
let plantsToMarket = harvestPlants(fieldPlants)
let plantsForSale = []
export const Catalog = (sellArray) => {
    for (const plant of plantsToMarket) {
        plantsForSale.push(plant.type + " ")
    }
    document.querySelector(".harvester").innerHTML = plantsForSale;
}
Catalog(plantsToMarket)