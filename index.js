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




