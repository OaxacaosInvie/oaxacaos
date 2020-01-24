<template>
  <div>
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js"></script>
    <link
      rel="stylesheet"
      href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css"
      type="text/css"
    />
    <!-- Promise polyfill script required to use Mapbox GL Geocoder in IE 11 -->
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
    <div id="map" class="map">
    </div>
  </div>

</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
/* eslint-disable */
export default {
  computed: {
    location () {
      // eslint-disable-next-line no-console
      console.log(this.$store.state.location)
      return location
    }
  },
  mounted () {
    this.createMap()
    // document.querySelector('.mapboxgl-ctrl-geocoder input').focus()
  },
  methods: {
    createMap () {
      const mapboxgl = require('mapbox-gl')
      const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder')

      mapboxgl.accessToken = 'pk.eyJ1IjoicGlucGFydGRldiIsImEiOiJjajBqOXh0anAwMDFkMzNwbW5qMzVuZGo0In0.ltvQzboVtprxfeFAVOw1GA'

      // init the map
      let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ximenabc/ck44uqzs21gk71cmtma66htry',
        center: [-96.707810, 17.067600], // starting position [lng(-180, 180), lat(-90, 90)]
        zoom: 15,
        pitch: 0,
        minZoom: 2,
        maxZoom: 20,
        attributionControl: false,
        showCompass: true
      })

      let customData = {
        'features': [
          {
            'type': 'Feature',
            'properties': {
              'title': 'Inviértete',
              'description': 'Centro de educación alternativa',
              'address': 'Perú 218, America Sur, 68104 Oaxaca de Juárez, Oax.'
            },
            'geometry': {
              'coordinates': [-96.707810, 17.067600],
              'type': 'Point'
            }
          }
        ],
        'type': 'FeatureCollection'
      }

      function forwardGeocoder(query) {
        let matchingFeatures = []
        for (var i = 0; i < customData.features.length; i++) {
          let feature = customData.features[i]
          console.log(feature)
          if (
            feature.properties.title
            .toLowerCase()
            .search(query.toLowerCase()) !== -1
          ) {
            feature['place_name'] = feature.properties.title
            feature['center'] = feature.geometry.coordinates
            feature['place_type'] = ['place']
            matchingFeatures.push(feature)
          }
        }
        return matchingFeatures
      }

      // this.MapboxGeocoder = new MapboxGeocoder({
      //   accessToken: 'sk.eyJ1IjoieGltZW5hYmMiLCJhIjoiY2s1OG80NXc2MGdnMTNucWhrZnhjd2xiaCJ9.JPCIElQqY-fAWLyG8nEplg',
      //   marker: true
      // })

      // Controls --------------------------

      let mapgeocoder = new MapboxGeocoder({
        accessToken: 'sk.eyJ1IjoieGltZW5hYmMiLCJhIjoiY2s1OG80NXc2MGdnMTNucWhrZnhjd2xiaCJ9.JPCIElQqY-fAWLyG8nEplg',
        mapboxgl: mapboxgl,
        placeholder: 'Buscar',
        countries: 'mx',
        localGeocoder: forwardGeocoder,
        language: 'es',
        flyTo: {
          bearing: 0,
          speed: 1.75,
          curve: 1,
          easing: function(t) {
            return t
          }
        },
        // bbox: [-98.706053, 15.705243, -93.662332, 18.580203],
        // filter: function(item) {
        //   return item.context
        //     .map(function(i) {
        //       return (
        //         i.id.split('.').shift() === 'region' &&
        //         i.text === 'Oaxaca'
        //       )
        //     })
        //     .reduce(function(aac, cur) {
        //       return acc || cur
        //     })
        // }
      })

      let mapNavCont = new mapboxgl.NavigationControl()
      
      let maoGeoCont = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })

      map.addControl(mapgeocoder, 'top-left')
      map.addControl(maoGeoCont, 'bottom-right')
      map.addControl(mapNavCont, 'bottom-left')
      // ----------------------------------

      // Get lng and lat by clicks
      map.on('click', function (e) {
        const lngandLat = e.lngLat
        const lng = Object.values(lngandLat)[0]
        const lat = Object.values(lngandLat)[1]
        console.log(`lng: ${lng}, lat: ${lat}`)
        var marker = new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(map);
      })

      // mapboxgl.addLayer({
      //   id: 'points'
      //   type: 'circle'
      // })
      // var marker = new mapboxgl.Marker({
      //    draggable: true
      // })
      // .setLngLat([-96.707, 17.065])
      // .addTo(map);
      // marker.on('dragend', onDragEnd);
     },
  }
}
</script>

<style>
  #map {
    max-height: 20cm;
    min-height: 15cm;
  }

  @media only screen and (max-width: 600px) {
    #map {
      max-height: 20cm;
      min-height: 10cm;
    }
  }

  @media only screen and (max-width: 960px) {
    #map {
      max-height: 20cm;
      min-height: 13cm;
    }
  }
</style>
