export class Material {
    constructor(name, pricePerUnit, // 1 нэгж материалын үнэ
    width, // Материалын өргөн
    height // Материалын өндөр
    ) {
        this.name = name;
        this.pricePerUnit = pricePerUnit;
        this.width = width;
        this.height = height;
    }
    getTotalArea() {
        return this.width * this.height;
    }
}
