import { Furniture } from "./Furniture.js";
import { CostCalculator } from "./CostCalculator.js";

    export class ProfitEstimator {
        static estimateProfit(
            furnitureList: Furniture[],
            sellingPricePerUnit: number,
            durationInMonths: number
        ): number {
            let totalCost = CostCalculator.calculateTotalCost(furnitureList);
            let totalRevenue = furnitureList.length * sellingPricePerUnit;
            let profit = totalRevenue - totalCost;
            // Ашиг хугацаанаас хамааралтайгаар өсөх
            let growthFactor = 1 + durationInMonths * 0.02; // Сар бүр 2%-иар өсөх, өсөлтийн хувийг өөрчлөх боломж
            return profit * growthFactor;
        }
    }