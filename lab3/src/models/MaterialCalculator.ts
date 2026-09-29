import { Furniture } from "./Furniture.js";
import { Material } from "./Material.js";

export class MaterialCalculator {

    static calculateRemainingMaterial(
        material: Material,
        furnitureList: Furniture[]
    ): number {

        const totalMaterialArea = material.width * material.height;

        let usedArea = 0;

        for (const item of furnitureList) {
            usedArea += item.requiredWidth * item.requiredHeight;
        }

        return totalMaterialArea - usedArea;
    }
}