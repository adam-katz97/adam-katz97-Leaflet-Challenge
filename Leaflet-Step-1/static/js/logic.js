


var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"

d3.json(url, function (data) {
  console.log(data.features)

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
    }).bindPopup("<h1>" + data.features[n].properties.mag + "</h1>").addTo(myMap);
    console.log(marker)
    mark.push(marker);


  }
  var info = L.control({
    position: "bottomright",

  });
  info.onAdd = function () {
    var div = L.DomUtil.create("div", "legend")


    return div;
  };
  function getColor(d) {
    return d > 4 ? '#008000' :
      d > 3 ? '#FFA500' :
        d > 2 ? '#FFFF00' :
          d > 1 ? '#FF0000' :
            '#800080';
  }
  //got the getColor function by altering code from leaflet geojson example page


  info.addTo(myMap)
  function updateLegend() {
    document.querySelector(".legend").innerHTML = [
      "<i style='background: " + getColor(5) + "'>__</i> " + "-10"+"<br>",
      "<i style='background: " + getColor(4) + "'>__</i> " + "11-39"+"<br>",
      "<i style='background: " + getColor(3) + "'>__</i> " + "40-69"+"<br>",
      "<i style='background: " + getColor(2) + "'>__</i> " + "70-89"+"<br>",
      "<i style='background: " + getColor(1) + "'>__</i> " + "90+"+"<br>"
      



    ].join("")
    // [

    //   "<p class='red'> : " + stationCount.OUT_OF_ORDER + "</p>",
    //   "<p class='coming-soon'>Stations Coming Soon: " + stationCount.COMING_SOON + "</p>",
    //   "<p class='empty'>Empty Stations: " + stationCount.EMPTY + "</p>",
    //   "<p class='low'>Low Stations: " + stationCount.LOW + "</p>",
    //   "<p class='healthy'>Healthy Stations: " + stationCount.NORMAL + "</p>"
    // ].join("");
  }
  updateLegend()




})







