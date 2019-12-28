<template>
  <div>
    <navLog />
    <div class="py-12" align="center" justify="center">
      <v-container>
        <v-row align="center" justify="center">
          <v-col
          cols="12"
          xl="8"
          lg="6"
          md="6"
          sm="8"
          xs="12"
          >
            <div id="white">
              <h1 class="font-weight-light display-1">Selecciona el tipo de cuenta que requieres</h1>
            </div>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="py-12">
          <v-col
            cols="12"
            xl="5"
            lg="5"
            md="6"
            sm="8"
            xs="12"
          >
            <nuxt-link to="/signUser" id="no-decoration">
              <v-card style="color: #083D77">
                <div class="py-12 px-6 hidden-xs-only">
                  <h1>Usuario</h1>
                  <div class="py-12">
                    <v-img :src="require('../static/user.png')" alt="chale"></v-img>
                  </div>
                  <div class="px-6 pt-6">
                    <p class="title">
                      Reporta problemas o celebraciones que bloqueen el paso en las calles de Oaxaca.
                    </p>
                  </div>
                </div>
                <div class="py-12 hidden-sm-and-up">
                  <h1>Usuario</h1>
                  <div class="py-3">
                    <v-img :src="require('../static/user.png')" alt="chale"></v-img>
                  </div>
                </div>
              </v-card>
            </nuxt-link>
          </v-col>
          <v-col
            cols="12"
            xl="5"
            lg="5"
            md="6"
            sm="8"
            xs="12"
          >
            <nuxt-link to="/signAdmin" id="no-decoration">
              <v-card style="color: #083D77">
                <div class="py-12 px-6 hidden-xs-only">
                  <h1>Administrador</h1>
                  <div class="py-3">
                    <v-img :src="require('../static/cops.png')" alt="chale"></v-img>
                  </div>
                  <div class="px-6 pt-6">
                    <p class="title">
                      Resuelve los problemas de tránsito, e inconveniencias en las calles de Oaxaca.
                    </p>
                  </div>
                </div>
                <div class="py-12 hidden-sm-and-up">
                  <h1>Administrador</h1>
                  <div class="py-3">
                    <v-img :src="require('../static/cops.png')" alt="chale"></v-img>
                  </div>
                </div>
              </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import navLog from '../components/navLog'
export default {
  layout: 'NoAppBar',
  components: {
    navLog
  }
}

</script>

<style>
  #white {
    color: white;
  }
</style>
