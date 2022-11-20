var airports = require('../Flights/airports.json');
var flights = require('../Flights/flights.json');


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

export function getAirports() {
    // TODO make a REST call to backend and get data or testing using JSON file
    return airports;
}

export function getDeals(request) {
    // TODO make a REST call to backend and get data for testing using JSON file
    let data =  JSON.parse(JSON.stringify(flights));
    if (request.filterBy && request.filterBy === 'Price: High to Low') {
        data = data.sort((a, b) => a.price - b.price)
    } else if (request.filterBy && request.filterBy === 'Price: Low to high') {
        data = data.sort((a, b) => b.price - a.price);
    }
    return data;
}

export function getFlightById(id){
    // TODO make a REST call to backend and get data for testing using JSON file
    let data =  JSON.parse(JSON.stringify(flights));
    data = data.filter((obj) => obj.id === id);
    return data;
}




