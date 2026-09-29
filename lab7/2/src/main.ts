type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Direction = "AM" | "PM";

class Stop {
  constructor(public name: string, public order: number) {}
}

class Route {
  public stops: Stop[] = [];

  constructor(public name: string, stops: Stop[]) {
    console.log(`Route created: ${name}`);
    this.setStops(stops);
  }

  setStops(stops: Stop[]) {
    // Rule 3: ordering validation
    const orders = stops.map(s => s.order);
    const unique = new Set(orders);
    if (unique.size !== stops.length) {
      throw new Error("Duplicate stop order!");
    }
    this.stops = stops.sort((a, b) => a.order - b.order);
  }
}

class GPSDevice {
  constructor(public id: string) {
    console.log(`GPS created: ${id}`);
  }
}

class Vehicle {
  public gps: GPSDevice;
  public driver?: Driver;
  public currentPassengers: number = 0;

  constructor(public id: string, public capacity: number) {
    this.gps = new GPSDevice("GPS-" + id); // composition
    console.log(`Vehicle created: ${id}`);
  }

  assignDriver(driver: Driver) {
    if (this.driver) throw new Error("Vehicle already has driver!");
    this.driver = driver;
  }
}

class Driver {
  constructor(public name: string) {}
}

class Parent {
  constructor(public name: string) {}
}

class PickupTag {
  constructor(public code: string) {}
}

class Child {
  public tag: PickupTag;

  constructor(public name: string, public parent: Parent) {
    if (!parent) throw new Error("Child must have parent!"); // Rule 1
    this.tag = new PickupTag("TAG-" + name); // composition
  }
}

class Subscription {
  constructor(
    public child: Child,
    public route: Route,
    public day: Day,
    public direction: Direction
  ) {}
}

class TripLog {
  constructor(
    public child: Child,
    public action: "BOARD" | "LEAVE",
    public time: Date
  ) {
    console.log(`LOG: ${child.name} ${action} at ${time}`);
  }
}

class NotificationService {
  notify(parent: Parent, message: string) {
    console.log(`Notify ${parent.name}: ${message}`);
  }
}

class Dispatcher {
  assign(vehicle: Vehicle, route: Route) {
    console.log(`Assigned ${vehicle.id} to ${route.name}`);
  }
}

class School {
  public routes: Route[] = [];
  addRoute(route: Route) {
    this.routes.push(route); // aggregation
  }
}   

// ===== DEMO =====

const parent = new Parent("Bat");
const children = [
  new Child("A", parent),
  new Child("B", parent),
  new Child("C", parent),
  new Child("D", parent),
  new Child("E", parent),
];

// Routes
const routeAM = new Route("Route-AM", [
  new Stop("S1", 1),
  new Stop("S2", 2),
  new Stop("S3", 3),
]);

const routePM = new Route("Route-PM", [
  new Stop("S1", 1),
  new Stop("S2", 2),
  new Stop("S3", 3),
]);

const school = new School();
school.addRoute(routeAM);
school.addRoute(routePM);

// Vehicles
const v1 = new Vehicle("V1", 2);
const v2 = new Vehicle("V2", 3);

// Drivers
const d1 = new Driver("Driver1");
const d2 = new Driver("Driver2");

v1.assignDriver(d1);
v2.assignDriver(d2);

// Dispatcher
const dispatcher = new Dispatcher();
dispatcher.assign(v1, routeAM);

// Subscriptions (Rule 2: capacity check)
const subs: Subscription[] = [];

function subscribe(child: Child, route: Route) {
  if (v1.currentPassengers >= v1.capacity) {
    throw new Error("Vehicle capacity exceeded!");
  }
  v1.currentPassengers++;
  subs.push(new Subscription(child, route, "Mon", "AM"));
}

try {
  children.forEach(c => subscribe(c, routeAM)); // will throw
} catch (e) {
  console.log("ERROR:", (e as Error).message);
}

// Simulation
const notify = new NotificationService();

children.slice(0, 2).forEach(child => {
  new TripLog(child, "BOARD", new Date()); // Rule 4
  notify.notify(child.parent, `${child.name} boarded`);
});

children.slice(0, 2).forEach(child => {
  new TripLog(child, "LEAVE", new Date());
  notify.notify(child.parent, `${child.name} left`);
});