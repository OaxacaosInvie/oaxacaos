<template>
  <div>
    <div id="map" class="map">
    </div>
  </div>

</template>

<script>
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
      const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
      const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder')

      mapboxgl.accessToken = 'pk.eyJ1IjoicGlucGFydGRldiIsImEiOiJjajBqOXh0anAwMDFkMzNwbW5qMzVuZGo0In0.ltvQzboVtprxfeFAVOw1GA'

      // init the map
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ximenabc/ck44uqzs21gk71cmtma66htry',
        center: [-96.707, 17.065], // starting position [lng(-180, 180), lat(-90, 90)]
        zoom: 15,
        pitch: 0,
        minZoom: 2,
        maxZoom: 20,
        attributionControl: false,
        showCompass: true
      })

      this.MapboxGeocoder = new MapboxGeocoder({
        accessToken: 'sk.eyJ1IjoieGltZW5hYmMiLCJhIjoiY2s1OG80NXc2MGdnMTNucWhrZnhjd2xiaCJ9.JPCIElQqY-fAWLyG8nEplg',
        marker: true
      })

      const nav = new mapboxgl.NavigationControl({
        showCompass: true
      })
      this.map.addControl(nav, 'top-left')
      // mapboxgl.addLayer({
      //   id: 'points'
      //   type: 'circle'
      // })
      // this.map.addControl(new MapboxGeocoder({
      //   accessToken: 'sk.eyJ1IjoieGltZW5hYmMiLCJhIjoiY2s1OG80NXc2MGdnMTNucWhrZnhjd2xiaCJ9.JPCIElQqY-fAWLyG8nEplg'
      // }))

    //   var marker = new mapboxgl.Marker({
    //     draggable: true
    //   })
    //   .setLngLat([-96.707, 17.065])
    //   .addTo(map);
    //   marker.on('dragend', onDragEnd);
     },
  }
}
</script>

<style>
  #map {
    max-height: 20cm;
    min-height: 15cm;
  }
</style>
