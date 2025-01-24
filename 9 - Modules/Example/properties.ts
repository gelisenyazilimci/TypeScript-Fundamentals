import {Taxi} from "./Taxi";


let taxi_1: Taxi = new Taxi({
    x: 31, y: 69
});
taxi_1.travelTo({
    x: 32, y: 68
});

let currentLocation = taxi_1.location;
taxi_1.location = {x: 33, y: 67};
