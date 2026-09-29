export class CostCalculator {
    static calculateTotalCost(furnitureList) {
        let totalCost = 0;
        furnitureList.forEach(furniture => {
            totalCost += furniture.getMaterialCost();
        });
        return totalCost;
    }
}
