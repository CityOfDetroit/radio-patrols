'use strict';
import Map from './map.class.js';
export default class Controller {
  constructor() {
    this.geocoderOff = true;
    this.scoutVolunteers = null;
    this.map = new Map({
      styleURL: 'mapbox://styles/mapbox',
      mapContainer: 'map',
      geocoder: true,
      baseLayers: {
        street: 'streets-v10',
        satellite: 'cj774gftq3bwr2so2y6nqzvz4'
      },
      center: [-83.10, 42.36],
      zoom: 11,
      boundaries: {
        sw: [-83.3437,42.2102],
        ne: [-82.8754,42.5197]
      },
      sources: [
        {
          id: "radio-patrols",
          type: "geojson",
          data: 'http://gis.detroitmi.gov/arcgis/rest/services/DoIT/RadioPatrols/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=fid%2C+name&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson'
        },
        {
          id: "single-point",
          type: "geojson",
          data: {
              "type": "FeatureCollection",
              "features": []
          }
        }
      ],
      layers: [
        {
          "id": "radio-patrols-fill",
          "type": "fill",
          "source": "radio-patrols",
          "layout": {},
          "paint": {
            "fill-color": '#9FD5B3',
            "fill-opacity": .5
          }
        },
        {
          "id": "radio-patrols-borders",
          "type": "line",
          "source": "radio-patrols",
          "layout": {},
          "paint": {
            "line-color": "#004544",
            "line-width": 3
          }
        },
        {
          "id": "radio-patrols-hover",
          "type": "fill",
          "source": "radio-patrols",
          "layout": {},
          "paint": {
            "fill-color": '#23A696',
            "fill-opacity": .5
          },
          "filter": ["==", "fid", ""]
        },
        {
          id: "point",
          "source": "single-point",
          "type": "circle",
          "paint": {
              "circle-radius": 10,
              "circle-color": "#007cbf"
          }
        }
      ]
    });
  }
  initialForm(ev,controller){
    switch (ev) {
      case 'v-sign-up':
        document.querySelector('#user-type-section').className = 'hidden';
        document.querySelector('main').className = '';
        break;
      default:

    }
  }
}
