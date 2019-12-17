<template>
  <div class="py-12">
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css' rel='stylesheet' />
    <h1>hola</h1>
    <div id="map"></div>
  </div>
</template>

<script>
/* eslint-disable */
import mapboxgl from 'mapbox-gl-vue'
mapboxgl.accessToken = 'pk.eyJ1IjoieGltZW5hYmMiLCJhIjoiY2s0M28xYncxMDJ5czNrbndhOTc3MGR3ZSJ9.jbTEn67uRUc22k3emC8LSw'
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ximenabc/ck47u01ch47sp1cp3z67xz9zt',
  center: [17.065, -96.707],
  zoom: 15
})
export default {
  layout: 'default'
}
</script>
