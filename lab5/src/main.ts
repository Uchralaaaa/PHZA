// 1. Interface
interface Bookable {
    book(): void;
    cancel(): void;
    getDetails(): string;
}

// 2. Abstract Class
abstract class Trip {
    protected destination: string;
    protected price: number;

    constructor(destination: string, price: number) {
        this.destination = destination;
        this.price = price;
    }

    getSummary(): string {
        return `Destination: ${this.destination}, Price: $${this.price}`;
    }

    abstract book(): void;
    abstract cancel(): void;
}

// 3. FlightTrip
class FlightTrip extends Trip implements Bookable {
    private airline: string;

    constructor(destination: string, price: number, airline: string) {
        super(destination, price);
        this.airline = airline;
    }

    book(): void {
        console.log(`Flight booked to ${this.destination} via ${this.airline}`);
    }

    cancel(): void {
        console.log(`Flight to ${this.destination} canceled`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Airline: ${this.airline}`;
    }
}

// 4. CruiseTrip
class CruiseTrip extends Trip implements Bookable {
    private shipName: string;

    constructor(destination: string, price: number, shipName: string) {
        super(destination, price);
        this.shipName = shipName;
    }

    book(): void {
        console.log(`Cruise booked to ${this.destination} on ${this.shipName}`);
    }

    cancel(): void {
        console.log(`Cruise to ${this.destination} canceled`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Ship: ${this.shipName}`;
    }
}

// 5. TrainTrip
class TrainTrip extends Trip implements Bookable {
    private trainName: string;

    constructor(destination: string, price: number, trainName: string) {
        super(destination, price);
        this.trainName = trainName;
    }

    book(): void {
        console.log(`Train booked to ${this.destination} on ${this.trainName}`);
    }

    cancel(): void {
        console.log(`Train trip to ${this.destination} canceled`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Train: ${this.trainName}`;
    }
}

// 6. HikingTrip
class HikingTrip extends Trip implements Bookable {
    private difficulty: string;

    constructor(destination: string, price: number, difficulty: string) {
        super(destination, price);
        this.difficulty = difficulty;
    }

    book(): void {
        console.log(`Hiking trip booked to ${this.destination}`);
    }

    cancel(): void {
        console.log(`Hiking trip to ${this.destination} canceled`);
    }

    getDetails(): string {
        return `${this.getSummary()}, Difficulty: ${this.difficulty}`;
    }
}

// 7. Main execution
function main() {
    const trips: Bookable[] = [
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