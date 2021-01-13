


var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"

d3.json(url, function (data) {
  console.log(data)
  
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
  var depth = []
  var lat = []
  var lon = []
  for (i = 0; i < data.features.length; i++) {

    depth.push(data.features[i].geometry.coordinates[2])
    lon.push(data.features[i].geometry.coordinates[0])
    lat.push(data.features[i].geometry.coordinates[1])
  }
  // console.log(depth);
  // console.log(loc)
  var mark = []

  for (n = 0; n < depth.length; n++) {
    var color = ""
    if (depth[n] <= 10) {
      console.log(depth[n])
      console.log(data.features[n].properties.mag)
      color = "green";
      console.log(color)
    }
    else if (depth[n] > 10 && depth[n] <= 39) {
      console.log(depth[n])
      console.log(data.features[n].properties.mag)
      color = "orenge";
      console.log(color)
    }
    else if (depth[n] >= 40 && depth[n] <= 69) {
      console.log(depth[n])
      console.log(data.features[n].properties.mag)
      color = "yellow";
      console.log(color)
    }
    else if (depth[n] >= 70 && depth[n] <= 89) {
      console.log(depth[n])
      console.log(data.features[n].properties.mag)
      color = "red";
      console.log(color)
    }
    else {
      console.log(depth[n])
      console.log(data.features[n].properties.mag)
      color = "purple"
      console.log(color)
    }

    var marker = L.circle([lat[n], lon[n]], {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      // Adjust radius
      radius: data.features[n].properties.mag * 50000
    }).bindPopup("<h1>" + data.features[n].properties.mag + "</h1>");
    console.log(marker)
    mark.push(marker);


  }
  


})







