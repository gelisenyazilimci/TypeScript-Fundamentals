import {Vehicle} from "./Vehicle";
import {Point} from "./Point";

export class Taxi implements Vehicle {
    constructor(private _location?: Point, private _color?: string) {}
    travelTo(point: Point): void {
        console.log(`Anlık konumu X: ${point.x} Y: ${point.y}`);
    }

    get location () {
        return this._location;
    }

    set location (value: Point) {
        if ((value.x || value.y) < 0) {
            throw new Error(`Kordinat bilgileri negatif olamaz`);
        }
        this._location = value;
    }
}