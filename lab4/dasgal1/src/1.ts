class Car{
    model: string
    color: string
    year: number

    constructor(model: string, color: string, year: number){
        this.model = model
        this.color = color
        this.year = year
    }

    //nasjilt
    Nasjilt(currentYear: number){
        const age = currentYear - this.year
        if(age>10) return "Nasjilttai"
        if(age<=1) return "Shine"
        return "On zaluu"
    }

    //hevleh
    printInfo(currentYear: number): void{
        console.log(`Zagvar: ${this.model}`)
        console.log(`Ungu: ${this.color}`)
        console.log(`Uildverlesen on: ${this.year}`)
        console.log(`Nasjilt: ${this.Nasjilt(currentYear)}`)
        console.log(`______________`)
    }
}


// Жишээ хэд хэдэн машин үүсгэх
const cars: Car[] = [
    new Car("Benz", "Black", 1997),
    new Car("Toyota", "White", 2015),
    new Car("Honda", "Red", 2025)
]

// Одоо оныг тодорхойлж, бүх машиныг хэвлэх
const currentYear = 2026
cars.forEach(car => car.printInfo(currentYear))