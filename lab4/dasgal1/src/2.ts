// Engine interface
interface Engine {
    start(): void
    stop(): void
}

// Interface тодорхойлох шаардлагагүй болсон тул CarService-г abstract class болгож болно
abstract class Vehicle {
    model: string
    color: string
    year: number

    constructor(model: string, color: string, year: number){
        this.model = model
        this.color = color
        this.year = year
    }

    printInfo(): void {
        console.log(`Zagvar: ${this.model}`)
        console.log(`Ungu: ${this.color}`)
        console.log(`On: ${this.year}`)
        console.log(`Nasjilt: ${this.Nasjilt(new Date().getFullYear())}`)
    }

    Nasjilt(current_Year: number): string {
        const age = current_Year - this.year
        if(age > 10) return "Nasjilttai"
        if(age <= 1) return "Shine"
        return "On zaluu"
    }
}

// Electric машин
class ElectricCar extends Vehicle implements Engine {
    start(): void {
        console.log("Electric engine aslaa")
    }
    stop(): void {
        console.log("Electric engine zogsoo")
    }
}

// Бензин машин
class GasCar extends Vehicle implements Engine {
    start(): void {
        console.log("Benzin hudulguur aslaa")
    }
    stop(): void {
        console.log("Benzin hudulguur zogsoo")
    }
}

// Машины эзэмшигч
class Person {
    name: string
    car: Vehicle & Engine

    constructor(name: string, car: Vehicle & Engine){
        this.name = name
        this.car = car
    }

    useCar(currentYear: number){
        console.log(`Ezemshigch: ${this.name}`)
        this.car.printInfo()
        this.car.start()
        this.car.stop()
        console.log("------------")
    }
}

// MAIN
const p1 = new Person("Bat", new ElectricCar("Tesla", "White", 2024))
const p2 = new Person("Bold", new GasCar("Toyota", "Black", 2010))

const current_Year = 2026

p1.useCar(current_Year)
p2.useCar(current_Year)