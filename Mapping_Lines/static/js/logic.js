// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
}).addTo(map);


// OR you can use below code without setview()

// let map = L.map("mapid", {
//     center: [
//         40.7, -94.5
//     ],
//     zoom: 4
// });

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circle([34.0522, -118.2437], {
//     // Skill Drill create a light-yellow circle with black lines indicating a 300-meter radius of Central Los Angeles on a dark map.
//     radius: 300,
//     color: 'black',
//     fillColor: '#FFFFE0',
//     fillOpacity: 0.5
// }).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cities.forEach(function (cityData) {
    console.log(cityData);
    L.circleMarker(cityData.location, {
        radius: cityData.population / 100000,
        color: 'orange',
        weight: 4,
        fillColor: '#FFA500'
    })
        .bindPopup("<h2>" + cityData.city + ", " + cityData.state + "</h2> <hr> <h3>Population " + cityData.population.toLocaleString() + "</h3>")
        .addTo(map);
});

// Using circleMarker() instead
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: '#FFFFA1',
//     // fillOpacity: 0.5
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // id: 'mapbox/dark-v10',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);