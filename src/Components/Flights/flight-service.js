var airports = require('./airports.json');
var flights = require('./flights.json');


export function getNoOfPassengers() {
    let ages = [];
    for (let i = 1; i <= 20; i++) {
        ages.push({ "label": i });
    }
    return ages;
}

export function getFlightBookingTypes() {
    return [
        {
            name: "One way",
            id: "oneWay",
        },
        {
            name: "Return",
            id: "return",
        },
    ]
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

export function getAirports() {
    // TODO make a REST call to backend and get data or testing using JSON file
    return airports;
}

export function getFlights(request) {
    // TODO make a REST call to backend and get data for testing using JSON file
    let data =  JSON.parse(JSON.stringify(flights));
    if (request.filterBy && request.filterBy === 'Price: High to Low') {
        data = data.sort((a, b) => a.price - b.price)
    } else if (request.filterBy && request.filterBy === 'Price: Low to high') {
        data = data.sort((a, b) => b.price - a.price);
    }else if (request.filterBy && request.filterBy === 'Airline') {
        data = data.sort((a, b) => b.company - a.company);
    }
    return data;
}

export function getFlightById(id){
    // TODO make a REST call to backend and get data for testing using JSON file
    let data =  JSON.parse(JSON.stringify(flights));
    data = data.filter((obj) => obj.id === id);
    return data;
}