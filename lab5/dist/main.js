"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Abstract Class
class Trip {
    destination;
    price;
    constructor(destination, price) {
        this.destination = destination;
        this.price = price;
    }
    getSummary() {
        return `Destination: ${this.destination}, Price: $${this.price}`;
    }
}
// 3. FlightTrip
class FlightTrip extends Trip {
    airline;
    constructor(destination, price, airline) {
        super(destination, price);
        this.airline = airline;
    }
    book() {
        console.log(`Flight booked to ${this.destination} via ${this.airline}`);
    }
    cancel() {
        console.log(`Flight to ${this.destination} canceled`);
    }
    getDetails() {
        return `${this.getSummary()}, Airline: ${this.airline}`;
    }
}
// 4. CruiseTrip
class CruiseTrip extends Trip {
    shipName;
    constructor(destination, price, shipName) {
        super(destination, price);
        this.shipName = shipName;
    }
    book() {
        console.log(`Cruise booked to ${this.destination} on ${this.shipName}`);
    }
    cancel() {
        console.log(`Cruise to ${this.destination} canceled`);
    }
    getDetails() {
        return `${this.getSummary()}, Ship: ${this.shipName}`;
    }
}
// 5. TrainTrip
class TrainTrip extends Trip {
    trainName;
    constructor(destination, price, trainName) {
        super(destination, price);
        this.trainName = trainName;
    }
    book() {
        console.log(`Train booked to ${this.destination} on ${this.trainName}`);
    }
    cancel() {
        console.log(`Train trip to ${this.destination} canceled`);
    }
    getDetails() {
        return `${this.getSummary()}, Train: ${this.trainName}`;
    }
}
// 6. HikingTrip
class HikingTrip extends Trip {
    difficulty;
    constructor(destination, price, difficulty) {
        super(destination, price);
        this.difficulty = difficulty;
    }
    book() {
        console.log(`Hiking trip booked to ${this.destination}`);
    }
    cancel() {
        console.log(`Hiking trip to ${this.destination} canceled`);
    }
    getDetails() {
        return `${this.getSummary()}, Difficulty: ${this.difficulty}`;
    }
}
// 7. Main execution
function main() {
    const trips = [
        new FlightTrip("Tokyo", 1200, "ANA"),
        new CruiseTrip("Caribbean", 3000, "Ocean Queen"),
        new TrainTrip("Beijing", 500, "Express Line"),
        new HikingTrip("Altai", 200, "Hard")
    ];
    for (const trip of trips) {
        trip.book();
        console.log(trip.getDetails());
        trip.cancel();
        console.log("-------------");
    }
}
main();
//# sourceMappingURL=main.js.map