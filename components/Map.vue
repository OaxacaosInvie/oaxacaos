<template>
  <div id="map" class="map">
    <div class="button-bar">
      <button v-on:click="addMapLayer()" />
    </div>
  </div>
</template>

<script>
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
    document.querySelector('.mapboxgl-ctrl-geocoder input').focus()
  },
  methods: {
    createMap () {
      const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
      const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder')

      mapboxgl.accessToken = 'pk.eyJ1IjoicGlucGFydGRldiIsImEiOiJjajBqOXh0anAwMDFkMzNwbW5qMzVuZGo0In0.ltvQzboVtprxfeFAVOw1GA'

      // init the map
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/pinpartdev/cj09ooc9g00a12sqpnkum9wcd',
        center: [4.7835, 52.3491],
        zoom: 6,
        pitch: 0,
        minZoom: 2,
        maxZoom: 20,
        attributionControl: false
      })

      this.map.addControl(new MapboxGeocoder({
        accessToken: 'sk.eyJ1IjoieGltZW5hYmMiLCJhIjoiY2s1OG80NXc2MGdnMTNucWhrZnhjd2xiaCJ9.JPCIElQqY-fAWLyG8nEplg'
      }))
    }
  }
}
</script>

<style>
  #map {
    height: 1000px;
  }
</style>
