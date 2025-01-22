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
        this.currentLocation = point;
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

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({
    x: 1,
    y: 2
});

console.log(taxi_1.currentLocation.x); // 1


class Animal {
    name:string ;

    constructor(name:string) {
        this.name = name;
    }
    speak(): string {
        return `${this.name} makes a noise`;
    }
}

const dog: Animal = new Animal("Dog");
console.log(dog.speak());


interface Flyable {
    fly(): string;
}
interface Swimable {
    swim(): string;
}
class Bird implements Flyable, Swimable {
    fly(): string {
        return "Bird is flying!";
    }

    swim(): string {
        return "Bird is swimming!";
    }
}

const bird = new Bird();
console.log(bird.fly());
console.log(bird.swim());