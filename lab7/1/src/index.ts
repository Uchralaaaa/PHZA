// =======================
// DEVICE BASE (optional, ойлгомжтой болгох)
// =======================

abstract class Device {
    constructor(public id: string) {}
}

class Sensor extends Device {
    constructor(public type: string) {
        super(type);
        console.log(`Created Sensor: ${type}`);
    }
}

class Camera extends Device {
    constructor(id: string) {
        super(id);
        console.log(`Created Camera: ${id}`);
    }
}

class FireAlarm extends Device {
    constructor(id: string) {
        super(id);
        console.log(`Created FireAlarm: ${id}`);
    }
}

// =======================
// COMPOSITION
// Room → Device
// =======================

class Room {
    private sensors: Sensor[] = [];
    private cameras: Camera[] = [];
    private alarms: FireAlarm[] = [];

    constructor(public number: string) {
        console.log(`Created: Room-${number}`);
    }

    addSensor(type: string) {
        const sensor = new Sensor(type);
        this.sensors.push(sensor);
        console.log(`Added Sensor: ${type}`);
        return sensor;
    }

    addCamera(id: string) {
        const camera = new Camera(id);
        this.cameras.push(camera);
        console.log(`Added Camera: ${id}`);
        return camera;
    }

    addFireAlarm(id: string) {
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
    private rooms: Room[] = [];

    constructor(public name: string) {
        console.log(`Created Zone: ${name}`);
    }

    addRoom(number: string) {
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
    private zones: Zone[] = [];

    constructor(public name: string) {
        console.log(`Created Building: ${name}`);
    }

    addZone(name: string) {
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
    private devices: Device[] = [];

    addDevice(device: Device) {
        this.devices.push(device);
        console.log(`Server monitoring device: ${device.id}`);
    }
}

// =======================
// ASSOCIATION
// =======================

class SecurityGuard {
    constructor(public name: string) {}
}

class AlarmSystem {
    sendAlert(guard: SecurityGuard, room: Room) {
        console.log(`Alert sent to SecurityGuard: ${guard.name}`);
    }
}

class ServiceEngineer {
    constructor(public name: string) {}

    checkDevice(device: Device) {
        console.log(`${this.name} checking device: ${device.id}`);
    }

    repairDevice(device: Device) {
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