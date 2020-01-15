<template>
  <v-app>
     <div>
      <v-app-bar
        color="#F95738"
        dark
        class="hidden-sm-and-down"
        fixed
        elevate-on-scroll
      >

        <nuxt-link to="/" id="no-decoration">
          <v-btn text><img src="../static/logoWhite.png" alt="ayuda" width="180"></v-btn>
        </nuxt-link>

        <v-spacer></v-spacer>

        <nuxt-link to="/map" id="no-decoration">
          <v-btn text>
            Ver mapa
          </v-btn>
        </nuxt-link>

        <v-btn text>
          Agregar reporte
        </v-btn>

        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-app-bar
        color="#F95738"
        dark
        class="hidden-md-and-up"
        fixed
        elevate-on-scroll
      >

        <nuxt-link to="/" id="no-decoration">
          <v-btn text><img src="../static/logoWhite.png" alt="ayuda" width="180"></v-btn>
        </nuxt-link>

        <v-spacer></v-spacer>

        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>

          <v-list>
            <nuxt-link to="/map" id="no-decoration">
              <v-list-item
                @click="() => {}"
              >
                <v-list-item-title>Ver mapa</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <v-list-item
              @click="() => {}"
            >
              <v-list-item-title>Agregar reporte</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
  v-app {
    padding-right: 0 !important;
  }

</style>
