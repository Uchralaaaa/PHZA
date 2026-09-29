export class Material {
    constructor(
        public name: string,
        public pricePerUnit: number, // 1 нэгж материалын үнэ
        public width: number, // Материалын өргөн
        public height: number // Материалын өндөр
    ) {}

    getTotalArea(): number {
    return this.width * this.height;
    }
}