"use strict";

interface Point {
    x: number;
    y: number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point:Point): void;
}

// implements = uygulamak!

class Taxi implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point) {
        console.log(`Anlık konumu X: ${point.x} Y: ${point.y}`)
    }
}

class Bus implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point) {
        console.log(`Anlık konumu X: ${point.x} Y: ${point.y}`)
    }
}

let a = new Taxi();
a.travelTo(
    {
        x: 81,
        y: 79
    }
);

