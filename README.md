# HTML-API
A front-end project that fetches and displays city details using third-party REST APIs — built with HTML, CSS, and vanilla JavaScript.

---
## TABLE OF CONTENTS
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [How It Works](#how-it-works)
4. [APIs Used](#apis-used)
5. [Tech Stack](#tech-stack)
6. [Accessibility](#accessibility)
7. [API: What Is It?](#api-application-programming-interface)
8. [References](#references)

---
## Project Overview

This app retrieves geographic and weather data for **Cape Town** by calling two external APIs on page load. The results are dynamically rendered into the page without any frameworks or libraries beyond Bootstrap for layout.

---

## File Structure

```
code/
├── index.html   — Page structure and accessibility markup
├── script.js    — API fetch logic and DOM rendering
└── style.css    — Custom styles and layout
```

---

## How it Works

On page load, `script.js` calls two functions in sequence:

### 1. `city()` — GeoDB Cities API (RapidAPI)
- Sends a `GET` request to the [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/wft-geo-db) using the city name `"Cape Town"` as a search prefix
- Extracts from the first result:
  - City name
  - Population
  - Latitude
  - Longitude
- Appends each as a `<p>` element inside `#output`
- Passes the latitude and longitude to `weather()`

### 2. `weather(lat, lon)` — Weatherbit API
- Called automatically by `city()` once coordinates are available
- Sends a `GET` request to the [Weatherbit Current Weather API](https://www.weatherbit.io/api)
- Displays the current temperature for the city's coordinates

### 3. `cityDetails()` — GeoDB Cities API (city ID lookup)
- Sends a `GET` request to the GeoDB API using Cape Town's fixed city ID (`Q5465`)
- Displays the city's elevation in metres

---

## APIs Used

| API | Provider | Data Retrieved |
|-----|----------|----------------|
| GeoDB Cities (name search) | RapidAPI | Name, population, latitude, longitude |
| GeoDB Cities (city ID) | RapidAPI | Elevation (metres) |
| Weatherbit Current Weather | Weatherbit | Current temperature |

---

## Tech Stack

- **HTML5** — Semantic structure with ARIA accessibility attributes
- **CSS3** — Custom layout and styling
- **JavaScript (ES6+)** — Async/await fetch requests, dynamic DOM rendering
- **Bootstrap 5.2** — Responsive grid layout (`container-fluid`, `row`, `col`)
- **Google Fonts** — Winky Rough (heading), Playpen Sans (output text)

---

## Accessibility

The page uses ARIA (`Accessible Rich Internet Applications`) attributes to support screen readers:

- `role="main"` on the container identifies the primary content area
- `role="banner"` on `<header>` with `aria-labelledby` linked to the `<h1>`
- `<section>` has `aria-label="City API Output"` to describe the region
- A visually hidden `<h2>` (`class="visually-hidden"`) provides a screen reader heading for the output area
- `#output` uses `role="region"`, `aria-live="polite"`, and `aria-atomic="true"` so screen readers announce the API results as they load

---

## API: APPLICATION PROGRAMMING INTERFACE

An **API** is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests should be made, what data formats to use, and how responses are returned. An API acts as an interface that allows proper communication between two programs.


## REFERENCES

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
- https://getbootstrap.com/
- https://fonts.google.com/
- https://www.w3schools.com/tags/ref_byfunc.asp