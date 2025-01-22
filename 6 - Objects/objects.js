"use strict";
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        this.currentLocation = point;
        console.log("Anlık konumu X: ".concat(point.x, " Y: ").concat(point.y));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Anlık konumu X: ".concat(point.x, " Y: ").concat(point.y));
    };
    return Bus;
}());
var a = new Taxi();
a.travelTo({
    x: 81,
    y: 79
});
var taxi_1 = new Taxi();
taxi_1.travelTo({
    x: 1,
    y: 2
});
console.log(taxi_1.currentLocation.x); // 1
