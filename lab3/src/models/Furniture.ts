import { Material } from "./Material.js";
    export abstract class Furniture {
        constructor(
            public name: string,
            public material: Material,
            public requiredWidth: number,
            public requiredHeight: number
        ) {}
        
        abstract calculateMaterialUsage(): number;
        getMaterialCost(): number {
            return this.calculateMaterialUsage() * this.material.pricePerUnit;
        }
    }

    // **Сандал** Класс
    export class Chair extends Furniture {
        calculateMaterialUsage(): number {
            return this.requiredWidth * this.requiredHeight;
        }
    }
    // **Ширээ** Класс
    export class Table extends Furniture {
        calculateMaterialUsage(): number {
            return this.requiredWidth * this.requiredHeight;
        }
    }

    // shuugee nemsen
    export class Drawer extends Furniture {
        calculateMaterialUsage(): number {
            return this.requiredWidth * this.requiredHeight;
        }
    }