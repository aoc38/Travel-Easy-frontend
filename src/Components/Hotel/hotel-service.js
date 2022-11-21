var hotel = require('./hotels.json');
var location = require('./city.json');


export function getNoOfGuest() {
    let guest = [];
    for (let i = 1; i <= 20; i++) {
        guest.push({ "label": i });
    }
    return guest;
}

export function getNoOfRoom() {
    let room = [];
    for (let i = 1; i <= 20; i++) {
        room.push({ "label": i });
    }
    return room;
}



export function getFilterStrategies() {
    return [
        {
            label: "Price: Low to high",
            id: "lth",
        },
        {
            label: "Price: High to Low",
            id: "htl",
        }
    ]
}

