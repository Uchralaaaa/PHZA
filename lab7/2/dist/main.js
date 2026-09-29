"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stop {
    name;
    order;
    constructor(name, order) {
        this.name = name;
        this.order = order;
    }
}
class Route {
    name;
    stops = [];
    constructor(name, stops) {
        this.name = name;
        console.log(`Route created: ${name}`);
        this.setStops(stops);
    }
    setStops(stops) {
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
    id;
    constructor(id) {
        this.id = id;
        console.log(`GPS created: ${id}`);
    }
}
class Vehicle {
    id;
    capacity;
    gps;
    driver;
    currentPassengers = 0;
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.gps = new GPSDevice("GPS-" + id); // composition
        console.log(`Vehicle created: ${id}`);
    }
    assignDriver(driver) {
        if (this.driver)
            throw new Error("Vehicle already has driver!");
        this.driver = driver;
    }
}
class Driver {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Parent {
    name;
    constructor(name) {
        this.name = name;
    }
}
class PickupTag {
    code;
    constructor(code) {
        this.code = code;
    }
}
class Child {
    name;
    parent;
    tag;
    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
        if (!parent)
            throw new Error("Child must have parent!"); // Rule 1
        this.tag = new PickupTag("TAG-" + name); // composition
    }
}
class Subscription {
    child;
    route;
    day;
    direction;
    constructor(child, route, day, direction) {
        this.child = child;
        this.route = route;
        this.day = day;
        this.direction = direction;
    }
}
class TripLog {
    child;
    action;
    time;
    constructor(child, action, time) {
        this.child = child;
        this.action = action;
        this.time = time;
        console.log(`LOG: ${child.name} ${action} at ${time}`);
    }
}
class NotificationService {
    notify(parent, message) {
        console.log(`Notify ${parent.name}: ${message}`);
    }
}
class Dispatcher {
    assign(vehicle, route) {
        console.log(`Assigned ${vehicle.id} to ${route.name}`);
    }
}
class School {
    routes = [];
    addRoute(route) {
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
const subs = [];
function subscribe(child, route) {
    if (v1.currentPassengers >= v1.capacity) {
        throw new Error("Vehicle capacity exceeded!");
    }
    v1.currentPassengers++;
    subs.push(new Subscription(child, route, "Mon", "AM"));
}
try {
    children.forEach(c => subscribe(c, routeAM)); // will throw
}
catch (e) {
    console.log("ERROR:", e.message);
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
//# sourceMappingURL=main.js.map