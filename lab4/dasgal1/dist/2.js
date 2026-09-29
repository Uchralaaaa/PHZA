"use strict";
// Interface тодорхойлох шаардлагагүй болсон тул CarService-г abstract class болгож болно
class Vehicle {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
    printInfo() {
        console.log(`Zagvar: ${this.model}`);
        console.log(`Ungu: ${this.color}`);
        console.log(`On: ${this.year}`);
        console.log(`Nasjilt: ${this.Nasjilt(new Date().getFullYear())}`);
    }
    Nasjilt(current_Year) {
        const age = current_Year - this.year;
        if (age > 10)
            return "Nasjilttai";
        if (age <= 1)
            return "Shine";
        return "On zaluu";
    }
}
// Electric машин
class ElectricCar extends Vehicle {
    start() {
        console.log("Electric engine aslaa");
    }
    stop() {
        console.log("Electric engine zogsoo");
    }
}
// Бензин машин
class GasCar extends Vehicle {
    start() {
        console.log("Benzin hudulguur aslaa");
    }
    stop() {
        console.log("Benzin hudulguur zogsoo");
    }
}
// Машины эзэмшигч
class Person {
    constructor(name, car) {
        this.name = name;
        this.car = car;
    }
    useCar(currentYear) {
        console.log(`Ezemshigch: ${this.name}`);
        this.car.printInfo();
        this.car.start();
        this.car.stop();
        console.log("------------");
    }
}
// MAIN
const p1 = new Person("Bat", new ElectricCar("Tesla", "White", 2024));
const p2 = new Person("Bold", new GasCar("Toyota", "Black", 2010));
const current_Year = 2026;
p1.useCar(current_Year);
p2.useCar(current_Year);
