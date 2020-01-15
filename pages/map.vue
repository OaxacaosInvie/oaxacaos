<template>
  <div class="py-12">
    <div class="py-12">
      <v-container>
        <v-row align="start" justify="center">
          <v-col
          cols="12"
          xl="8"
          lg="8"
          md="7"
          sm="10"
          xs="12"
          >
            <div>
              <mapComp />
            </div>
          </v-col>
          <v-col
          cols="12"
          xl="4"
          lg="4"
          md="5"
          sm="10"
          xs="12"
          >
            <div>
              <v-card>
                <div class="pa-12">
                  <h1>hola</h1>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import mapComp from '../components/mapComp'
// import mapboxgl from 'mapbox-gl-vue'
// mapboxgl.accessToken = 'pk.eyJ1IjoieGltZW5hYmMiLCJhIjoiY2s0M28xYncxMDJ5czNrbndhOTc3MGR3ZSJ9.jbTEn67uRUc22k3emC8LSw'
// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/ximenabc/ck47u01ch47sp1cp3z67xz9zt',
//   center: [17.065, -96.707],
//   zoom: 15
// })
export default {
  layout: 'default',
  components: {
    mapComp
  }
}
</script>
