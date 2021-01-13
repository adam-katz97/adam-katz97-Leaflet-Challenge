# adam-katz97-Leaflet-Challenge
This program is meant to retrieve earthquake data from a url and create a map using leaflet. First, I create an object to hold the map. Next I make a map tile layer by taking a premade map from leaflet. After that I looped the data given to me by my selected url, creating arrays for the lattitude, longitude and depth of the recorded earthquakes. I then loop through my array, selecting a color value based on the data which is used as the fill color for a circle whose location is based on the latitude and longitude of the corrosponding datapoint and whose radius is determined by the magnitude of the earthquake. Finally, I made a legend for the map, which explains the range of depth each color is assigned to.