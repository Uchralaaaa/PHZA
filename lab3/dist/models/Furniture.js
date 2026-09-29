export class Furniture {
    constructor(name, material, requiredWidth, requiredHeight) {
        this.name = name;
        this.material = material;
        this.requiredWidth = requiredWidth;
        this.requiredHeight = requiredHeight;
    }
    getMaterialCost() {
        return this.calculateMaterialUsage() * this.material.pricePerUnit;
    }
}
// **Сандал** Класс
export class Chair extends Furniture {
    calculateMaterialUsage() {
        return this.requiredWidth * this.requiredHeight;
    }
}
// **Ширээ** Класс
export class Table extends Furniture {
    calculateMaterialUsage() {
        return this.requiredWidth * this.requiredHeight;
    }
}
// shuugee nemsen
export class Drawer extends Furniture {
    calculateMaterialUsage() {
        return this.requiredWidth * this.requiredHeight;
    }
}
