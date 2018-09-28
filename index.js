'use strict';
import Controller from './components/controller.class.js';
import mapboxgl from 'mapbox-gl';
(function(){
  let controller = new Controller();
  controller.map.map.on("mousemove", function(e, parent = this) {
    console.log(this);
    // let features = this.queryRenderedFeatures(e.point, {
    //     layers: ["radio-patrols-fill"]
    // });
    // this.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  });
  controller.map.map.on("click", function(e, parent = this) {
      console.log(this);
      
    // var features = this.queryRenderedFeatures(e.point, {
    //     layers: ["radio-patrols-fill"]
    //   });
    //   // console.log(e.point);
    //   if (features.length) {
    //     let date = new Date();
    //     date = date.getDate();
    //     (date === 30) ? date = 'volunteers30' : date = 'volunteers31';
    //     new mapboxgl.Popup()
    //         .setLngLat(features[0].geometry.coordinates[0][0])
    //         .setHTML('<h2>Volunteers: ' + controller.scoutVolunteers[features[0].properties.area][date] + '</h2>')
    //         .addTo(this);
    //   }
  });
})(window);
