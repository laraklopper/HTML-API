// City name used as the search term for all API requests
const cityName = "Cape Town";

// ─── FUNCTION 1: city() ───────────────────────────────────────────────────────
// Fetches city data from the GeoDB Cities API using the city name as a prefix.
// Displays: city name, population, latitude, and longitude.
// Then calls weather() with the returned coordinates.
async function city() {
    // Build the request URL using the city name variable
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}`;

    // Request configuration: GET method with RapidAPI authentication headers
    const options = {
        method: 'GET',//Request method
        headers: {//API request headers
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '8de9ae9d72msh7f81545ca36cc82p12ed14jsn731fcedd1cba',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        // Send the request and parse the JSON response
        const response = await fetch(url, options);
        const result = await response.json();

        // Get the output container from the DOM
        const output = document.getElementById("output");

        // Display city name from the first result in the data array
        const cityElement = document.createElement('p');
        cityElement.textContent = `City Name: ${result.data[0].name}`;
        output.appendChild(cityElement);

        // Display population
        const populationElement = document.createElement('p');
        populationElement.textContent = `The population is: ${result.data[0].population}`;
        output.appendChild(populationElement);

        // Display latitude coordinate
        const latitudeElement = document.createElement('p');
        latitudeElement.textContent = `The latitude is: ${result.data[0].latitude}`;
        output.appendChild(latitudeElement);

        // Display longitude coordinate
        const longitudeElement = document.createElement('p');
        longitudeElement.textContent = `The longitude is: ${result.data[0].longitude}`;
        output.appendChild(longitudeElement);

        // Pass coordinates to weather() to fetch the current temperature
        weather(result.data[0].latitude, result.data[0].longitude);
    } catch (error) {
        // Log any network or parsing errors to the console
        console.error(error);
    }
}

// ─── FUNCTION 2: weather(lat, lon) ───────────────────────────────────────────
// Called by city() after coordinates are retrieved.
// Fetches current weather from the Weatherbit API for the given lat/lon.
// Displays: current temperature.
async function weather(lat, lon) {
    // Weatherbit API key
    const key = "0394ff70fc014a1b8440691a5a5012f9";

    // Build the request URL using the coordinates passed in from city()
    const URL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${key}&include=minutely`;

    // Request configuration: GET method, no extra headers required
    const options = {
        method: "GET",//Request method
    };

    try {
        // Send the request and parse the JSON response
        const response = await fetch(URL, options);
        const data = await response.json();

        // Get the output container from the DOM
        const output = document.getElementById("output");

        // Display the current temperature from the first result
        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `The current temperature is: ${data.data[0].temp}`;
        output.appendChild(temperatureElement);
    } catch (error) {
        // Log any network or parsing errors to the console
        console.error(error);
    }
}

// ─── FUNCTION 3: cityDetails() ───────────────────────────────────────────────
// Fetches additional city details from the GeoDB Cities API using Cape Town's
// fixed city ID (Q5465) for a direct lookup.
// Displays: elevation in metres.
async function cityDetails() {
    // Direct city ID endpoint — Q5465 is Cape Town's GeoDB identifier
    const Api = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q5465';

    // Request configuration: GET method with RapidAPI authentication headers
    const options = {
        method: 'GET',//Requeat method
        headers: {//
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'ad05b7f743msha57cb237083cb8ap10e218jsn26c2e14702fa',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        // Send the request and parse the JSON response
        const response = await fetch(Api, options);
        const data = await response.json();

        // Get the output container from the DOM
        const output = document.getElementById("output");

        // Display the city's elevation in metres
        const elevationElement = document.createElement('p');
        elevationElement.textContent = `The elevation is: ${data.data.elevationMeters}`;
        output.appendChild(elevationElement);
    } catch (error) {
        // Log any network or parsing errors to the console
        console.error(error);
    }
}

// ─── INITIALISE ──────────────────────────────────────────────────────────────
// Call city() — this also triggers weather() internally via the coordinates
// Call cityDetails() — runs in parallel for the elevation lookup
city();
cityDetails();