"use strict";

interface Point {
    x:number;
    y:number;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point):void;
}

let travelTo =  (point: Point):void  => {

}
function getDistance (point1: Point, point2?: Point) {

}
travelTo ({
    x: 1, y: 1
})