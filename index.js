'use strict';
import Controller from './components/controller.class.js';
import mapboxgl from 'mapbox-gl';
(function(){
  let controller = new Controller();
  controller.map.map.on("mousemove", function(e, parent = this) {
    let features = this.queryRenderedFeatures(e.point, {
        layers: ["radio-patrols-fill"]
    });
    if(features.length){
      this.setFilter("radio-patrols-hover", ["==", "FID", features[0].properties.FID]);
    }
    this.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
  });
  controller.map.map.on("mouseleave", "radio-patrols-fill", function() {
    this.setFilter("radio-patrols-hover", ["==", "FID", ""]);
  });
  controller.map.map.on("click", function(e, parent = this) {
    console.log(this);
      
    var features = this.queryRenderedFeatures(e.point, {
        layers: ["radio-patrols-fill"]
      });
      // console.log(e.point);
      if (features.length) {
        console.log(features[0]);
        
        // let date = new Date();
        // date = date.getDate();
        // (date === 30) ? date = 'volunteers30' : date = 'volunteers31';
        // new mapboxgl.Popup()
        //     .setLngLat(features[0].geometry.coordinates[0][0])
        //     .setHTML('<h2>Volunteers: ' + controller.scoutVolunteers[features[0].properties.area][date] + '</h2>')
        //     .addTo(this);
      }else{
        console.log('no radio patrol');
      }
  });
  let startingBtns = document.querySelectorAll('#user-type-section button');
  startingBtns.forEach(function(btn){
    btn.addEventListener('click', function(ev){
      controller.initialForm(ev.target.attributes[2].nodeValue, controller);
    });
  });
  let reloadPage = function reloadPage(){
    window.location.reload(true);
  };
  document.getElementById('logo').addEventListener('click', reloadPage);
})(window);
