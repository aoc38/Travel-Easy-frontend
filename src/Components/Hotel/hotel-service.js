var hotel = require('../json/hotels.json');
var destinationCity = require('../json/city.json');


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
        },
        {
            label: "Airline",
            id: "htl",
        }
    ]
}

export function getDestination() {
    // TODO make a REST call to backend and get data or testing using JSON file
    return destinationCity;
}

export function getFlights(request) {
    // TODO make a REST call to backend and get data for testing using JSON file
    let data =  JSON.parse(JSON.stringify(hotel));
    if (request.filterBy && request.filterBy === 'Price: High to Low') {
        data = data.sort((a, b) => a.price - b.price)
    } else if (request.filterBy && request.filterBy === 'Price: Low to high') {
        data = data.sort((a, b) => b.price - a.price);
    }else if (request.filterBy && request.filterBy === 'Airline') {
        data = data.sort((a, b) => b.company - a.company);
    }
    return data;
}

