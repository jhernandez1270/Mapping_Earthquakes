// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    id: 'mapbox/light-v10',
    // id: 'mapbox/dark-v10',
    // id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// We create the tile layer DARK background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    id: 'mapbox/dark-v10',
    // id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
// dark.addTo(map);

// Create a base layer that holds both maps.
let baseMaps = {
    Light: light,
    Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [light]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/jhernandez1270/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/jhernandez1270/Mapping_Earthquakes/main/torontoRoutes.json";


// Grabbing our GeoJSON data.
d3.json(torontoData).then(function (data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        color: "#ffffa1",
        weight: 2,
        onEachFeature: function (feature, layer) {
            console.log(layer);
            layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3><hr><h3>Destination: " + feature.properties.dst + "</h3>");
        }

    }).addTo(map);
});


// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function (data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data).addTo(map);
// });