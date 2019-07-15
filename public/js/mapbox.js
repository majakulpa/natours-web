/* eslint-disable */
//disable eslint just for this file, by writing this one comment up

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWFqYWt1bHBhIiwiYSI6ImNqeHdzMjVmbDBpdjIzbm5ydm9sem1yajAifQ._KNtdDIp1i797hFZO2rogA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/majakulpa/cjxwsa8do8quj1cs6mz4893we',
    scrollZoom: false
    //   center: [-118.284895, 34.096082],
    //   zoom: 6
    //interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //create marker
    const el = document.createElement('div');
    el.className = 'marker';
    //add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //add popup
    new mapboxgl.Popup({
      offset: 20
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
