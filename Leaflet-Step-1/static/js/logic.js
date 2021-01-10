


var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson" 
var myMap = L.map("mapid", {
  center: [37.09, -95.71],
  zoom: 4
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

d3.json(url, function(data){
  var depth = []
  var loc = []
    for(i=0; i<data.features.length; i++){

      depth.push(data.features[i].geometry.coordinates[2])
      loc.push(data.features[i].geometry.coordinates.slice(0,2))
    }
    console.log(depth);
    console.log(loc)
    for(n=0; n<depth.length; n++){
      var color = ""
      if (depth[n] <= 10) {
        console.log(depth[n])
        color = "green";
        console.log(color)
      }
      else if (depth[n] > 10 && depth[n]<=39) {
        console.log(depth[n])
        color = "orenge";
        console.log(color)
      }
      else if (depth[n] >= 40 && depth[n]<=69) {
        console.log(depth[n])
        color = "yellow";
        console.log(color)
      }
      else if(depth[n] >=70 && depth[n] <=89) {
        console.log(depth[n])
        color = "red";
        console.log(color)
      }
      else{
        console.log(depth[n])
        color = "purple"
        console.log(color)
      }
    
      L.circle(loc[n], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: color,
        // Adjust radius
        radius: data.features[n].properties.mag * 4500
      }).bindPopup("<h1>" + data.features[n].properties.mag + "</h1>" ).addTo(myMap);
      console.log(data.features[n].properties.mag)
  
}
})



// d3.json(url, function(data){
//     console.log(data.features)
//     createFeatures(data.features)
// });

// function createFeatures(earthquakeData) {


//     function onEachFeature(feature, layer) {
//       layer.bindPopup("<h3>" + feature.properties.place +
//         "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//     }
  

//     var earthquakes = L.geoJSON(earthquakeData, {
//       onEachFeature: onEachFeature
//     });
    
    
    
    
    
  
//     // Sending our earthquakes layer to the createMap function
//     createMap(earthquakes);
//   }
  
  






//   function createMap(earthquakes) {
    
  
//     // Define streetmap and darkmap layers
//     var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//       tileSize: 512,
//       maxZoom: 18,
//       zoomOffset: -1,
//       id: "mapbox/streets-v11",
//       accessToken: API_KEY
//     });
  
//     // var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     //   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     //   maxZoom: 18,
//     //   id: "dark-v10",
//     //   accessToken: API_KEY
//     // });
  
//     // Define a baseMaps object to hold our base layers
//     var baseMaps = {
//       "Street Map": streetmap,
//       // "Dark Map": darkmap
//     };
  
//     // Create overlay object to hold our overlay layer
//     var overlayMaps = {
//       Earthquakes: earthquakes
//     };
  
//     // Create our map, giving it the streetmap and earthquakes layers to display on load
//     var myMap = L.map("mapid", {
//       center: [
//         37.09, -95.71
//       ],
//       zoom: 5,
//       layers: [streetmap, earthquakes]
//     });
  



//     d3.json(url, function(quakeData){
//       console.log(quakeData.features.length)
//       var depth = []
//     for(i=0; i<quakeData.features.length; i++){

//       depth.push(quakeData.features[i].properties.mag)
//     }
//     console.log(depth)
//     for(n=0; n<depth.length; n++){
//       var color = ""
//       if (depth[n] > 19) {
//         console.log(depth[n])
//         color = "yellow";
//       }
//       else if (depth[n] > 39) {
//         console.log(depth[n])
//         color = "blue";
//       }
//       else if (depth[n] > 59) {
//         console.log(depth[n])
//         color = "green";
//       }
//       else if(depth[n] >79) {
//         console.log(depth[n])
//         color = "red";
//       }
//       else{
//         console.log(depth[n])
//         color = "purple"
//       }
    
//       L.circle(depth[n], {
//         fillOpacity: 0.75,
//         color: "white",
//         fillColor: color,
//         // Adjust radius
//         radius: depth[n]* 1500
//       }).addTo(myMap);
//     }
//     })
    
  

    
//   }
  
  


