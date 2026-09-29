import { Furniture } from "./Furniture.js";
    export class CostCalculator {
        static calculateTotalCost(furnitureList: Furniture[]): number {
            let totalCost = 0;
            furnitureList.forEach(furniture => {
                totalCost += furniture.getMaterialCost();
            });
            return totalCost;
        }
    }