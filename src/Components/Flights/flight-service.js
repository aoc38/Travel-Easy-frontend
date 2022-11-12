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

export function getAirports() {
    // TODO make a REST call to backend and get data or testing using JSON file
    return airports;
}

export function getFlights(request) {
    // TODO make a REST call to backend and get data or testing using JSON file
    return flights
}