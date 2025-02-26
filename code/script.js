const cityName = "Cape Town";

// API get request for city name
async function city() {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}`;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '8de9ae9d72msh7f81545ca36cc82p12ed14jsn731fcedd1cba',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const output = document.getElementById("output");

        const cityElement = document.createElement('p');
        cityElement.textContent = `City Name: ${result.data[0].name}`;
        output.appendChild(cityElement);

        const populationElement = document.createElement('p');
        populationElement.textContent = `The population is: ${result.data[0].population}`;
        output.appendChild(populationElement);

        const latitudeElement = document.createElement('p');
        latitudeElement.textContent = `The latitude is: ${result.data[0].latitude}`;
        output.appendChild(latitudeElement);

        const longitudeElement = document.createElement('p');
        longitudeElement.textContent = `The longitude is: ${result.data[0].longitude}`;
        output.appendChild(longitudeElement);

        weather(result.data[0].latitude, result.data[0].longitude);
    } catch (error) {
        console.error(error);
    }
}

//Api Get request for city location weather
async function weather(lat, lon) {
    const key = "0394ff70fc014a1b8440691a5a5012f9";
    const URL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${key}&include=minutely`;
    const options = {
        method: "GET",
    };

    try {
        const response = await fetch(URL, options);
        const data = await response.json();

        const output = document.getElementById("output");

        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `The current temperature is: ${data.data[0].temp}`;
        output.appendChild(temperatureElement);
    } catch (error) {
        console.error(error);
    }
}

//Api get request for city details
async function cityDetails() {
    const Api = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q5465';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'ad05b7f743msha57cb237083cb8ap10e218jsn26c2e14702fa',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(Api, options);
        const data = await response.json();

        const output = document.getElementById("output");

        const elevationElement = document.createElement('p');
        elevationElement.textContent = `The elevation is: ${data.data.elevationMeters}`;
        output.appendChild(elevationElement);
    } catch (error) {
        console.error(error);
    }
}

city();
cityDetails();
