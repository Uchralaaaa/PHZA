"use strict";
// =======================
// DEVICE BASE (optional, ойлгомжтой болгох)
// =======================
Object.defineProperty(exports, "__esModule", { value: true });
class Device {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Sensor extends Device {
    type;
    constructor(type) {
        super(type);
        this.type = type;
        console.log(`Created Sensor: ${type}`);
    }
}
class Camera extends Device {
    constructor(id) {
        super(id);
        console.log(`Created Camera: ${id}`);
    }
}
class FireAlarm extends Device {
    constructor(id) {
        super(id);
        console.log(`Created FireAlarm: ${id}`);
    }
}
// =======================
// COMPOSITION
// Room → Device
// =======================
class Room {
    number;
    sensors = [];
    cameras = [];
    alarms = [];
    constructor(number) {
        this.number = number;
        console.log(`Created: Room-${number}`);
    }
    addSensor(type) {
        const sensor = new Sensor(type);
        this.sensors.push(sensor);
        console.log(`Added Sensor: ${type}`);
        return sensor;
    }
    addCamera(id) {
        const camera = new Camera(id);
        this.cameras.push(camera);
        console.log(`Added Camera: ${id}`);
        return camera;
    }
    addFireAlarm(id) {
        const alarm = new FireAlarm(id);
        this.alarms.push(alarm);
        console.log(`Added FireAlarm: ${id}`);
        return alarm;
    }
}
// =======================
// COMPOSITION
// Zone → Room
// =======================
class Zone {
    name;
    rooms = [];
    constructor(name) {
        this.name = name;
        console.log(`Created Zone: ${name}`);
    }
    addRoom(number) {
        const room = new Room(number);
        this.rooms.push(room);
        return room;
    }
}
// =======================
// COMPOSITION
// Building → Zone
// =======================
class Building {
    name;
    zones = [];
    constructor(name) {
        this.name = name;
        console.log(`Created Building: ${name}`);
    }
    addZone(name) {
        const zone = new Zone(name);
        this.zones.push(zone);
        return zone;
    }
}
// =======================
// AGGREGATION
// CentralServer → Device
// =======================
class CentralServer {
    devices = [];
    addDevice(device) {
        this.devices.push(device);
        console.log(`Server monitoring device: ${device.id}`);
    }
}
// =======================
// ASSOCIATION
// =======================
class SecurityGuard {
    name;
    constructor(name) {
        this.name = name;
    }
}
class AlarmSystem {
    sendAlert(guard, room) {
        console.log(`Alert sent to SecurityGuard: ${guard.name}`);
    }
}
class ServiceEngineer {
    name;
    constructor(name) {
        this.name = name;
    }
    checkDevice(device) {
        console.log(`${this.name} checking device: ${device.id}`);
    }
    repairDevice(device) {
        console.log(`${this.name} repairing device: ${device.id}`);
    }
}
// =======================
// MAIN (RUN)
// =======================
function main() {
    console.log("=== SYSTEM START ===");
    // Composition бүтэц
    const building = new Building("Smart Building");
    const zoneA = building.addZone("Zone A");
    const zoneB = building.addZone("Zone B");
    const room201 = zoneA.addRoom("201");
    const room202 = zoneA.addRoom("202");
    // Room дотор device (Composition)
    const sensor1 = room201.addSensor("Motion Sensor");
    const sensor2 = room201.addSensor("Fire Sensor");
    const camera1 = room201.addCamera("CAM-01");
    room201.addFireAlarm("FA-01");
    room202.addSensor("Temperature Sensor");
    // Aggregation (server)
    const server = new CentralServer();
    server.addDevice(sensor1);
    server.addDevice(camera1);
    // Association (guard + alarm)
    const guard = new SecurityGuard("B. Enkhbat");
    const alarmSystem = new AlarmSystem();
    alarmSystem.sendAlert(guard, room201);
    // Association (engineer)
    const engineer = new ServiceEngineer("T. Bat");
    engineer.checkDevice(sensor2);
    engineer.repairDevice(camera1);
    console.log("=== SYSTEM END ===");
}
main();
//# sourceMappingURL=index.js.map