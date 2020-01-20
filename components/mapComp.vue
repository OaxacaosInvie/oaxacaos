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
      var map = new mapboxgl.Map({
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

      // this.MapboxGeocoder = new MapboxGeocoder({
      //   accessToken: 'sk.eyJ1IjoieGltZW5hYmMiLCJhIjoiY2s1OG80NXc2MGdnMTNucWhrZnhjd2xiaCJ9.JPCIElQqY-fAWLyG8nEplg',
      //   marker: true
      // })

      // Controls --------------------------

      let mapgeocoder = new MapboxGeocoder({
        accessToken: 'sk.eyJ1IjoieGltZW5hYmMiLCJhIjoiY2s1OG80NXc2MGdnMTNucWhrZnhjd2xiaCJ9.JPCIElQqY-fAWLyG8nEplg',
        mapboxgl: mapboxgl,
        placeholder: 'Buscar'
      })

      map.addControl(mapgeocoder, 'top-left')

      // Navigation control
      map.addControl(new mapboxgl.NavigationControl())

      // Geolocate control
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      )
      // ----------------------------------

      // Get lng and lat by clicks
      map.on('click', function (e) {
        const lngandLat = e.lngLat
        const lng = Object.values(lngandLat)[0]
        const lat = Object.values(lngandLat)[1]
        console.log(`lng: ${lng}, lat: ${lat}`)
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
