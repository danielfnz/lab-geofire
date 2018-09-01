/* Declarando as bibliotecas utilizadas */
var GeoFire = require('geofire');
var firebase = require('firebase');

/* Inicializando o firebase com credenciais padroes do geofire */
firebase.initializeApp({
    apiKey: "AIzaSyC5IcRccDo289TTRa3Y7qJIu8YPz3EnKAI",
    databaseURL: "https://geofire-9d0de.firebaseio.com"
  });

/* Referencia do documento `daniel` no firebase */
var firebaseRef = firebase.database().ref('daniel');

//GeoFire index
var ref = new GeoFire(firebaseRef);

var fishLocations = [
    [-16.130262, 153.605347],   // Coral Sea
    [-66.722541, -167.019653],  // Southern Ocean
    [-41.112469, 159.054565],   // Tasman Sea
    [30.902225, -166.66809]     // North Pacific Ocean
  ];

  // Set the initial locations of the fish in GeoFire
  var promises = fishLocations.map(function(location, index) {
    return geoFire.set("fish" + index, location).then(function() {
      console.log("fish" + index + " initially set to [" + location + "]");
    });
  });




