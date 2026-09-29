import { Material } from "./Material";
export declare abstract class Furniture {
    name: string;
    material: Material;
    requiredWidth: number;
    requiredHeight: number;
    constructor(name: string, material: Material, requiredWidth: number, requiredHeight: number);
    abstract calculateMaterialUsage(): number;
    getMaterialCost(): number;
}
export declare class Chair extends Furniture {
    calculateMaterialUsage(): number;
}
export declare class Table extends Furniture {
    calculateMaterialUsage(): number;
}
export declare class Drawer extends Furniture {
    calculateMaterialUsage(): number;
}
//# sourceMappingURL=Furniture.d.ts.map