/* Declarando as bibliotecas utilizadas */
var GeoFire = require('geofire');
var firebase = require('firebase');

/* Inicializando o firebase com credenciais padroes do geofire */
firebase.initializeApp({
  apiKey: "AIzaSyC5IcRccDo289TTRa3Y7qJIu8YPz3EnKAI",
  databaseURL: "https://geofire-9d0de.firebaseio.com"
});

/* Referencia do documento `daniel` no firebase */
var firebaseRef = firebase.database().ref('localizacoes');

//GeoFire index
var geoFire = new GeoFire(firebaseRef);

//Adiciona a localização no firebase
geoFire.set("estabelecimento", [-16.130262, 153.605347]);

//Obtem a localização da key 'estabelecimento' do firebase
geoFire.get("estabelecimento").then(function(location) {
console.log(location);
});

//Obtem os estabelecimentos com raio de 10km da coodernada
var geoQuery = geoFire.query({radius : 10, center: [-16.130262, 153.605347]});

//Apresenta os estabelecimentos encontrados
geoQuery.on("key_entered", function(key, location) {
  console.log("Estabelecimento encontrado: "+key + "\nLocalização: "+location+'\n');
});

//Cancela a query, quando o evento é encerrado
geoQuery.on("ready", function() {
  console.log("****Query encerrada*******");
  geoQuery.cancel();
})

