<template>
  <div>
    <div id="main" class="hidden-md-and-down py-12">
      <v-container>
        <div class="py-12">
          <v-row align="center" justify="center">
            <v-col cols="12" lg="6" md="6" sm="12" id="present">
              <p class="display-2 font-weight-light" id="title">Que el tráfico no te detenga</p>
              <p class="title font-weight-light">Nuestro objetivo es informar a la población de Oaxaca, sobre cualquier problema que pueda perjudicar la movilidad dentro de la ciudad.</p>
              <div class="py-12">
                <v-row align="start" justify="start">
                  <v-col cols="12" lg="6" md="6" sm="6" xs="12">
                    <nuxt-link to="/select" id="no-decoration">
                      <v-btn block id="button" x-large color="white" elevation="12">Crea tu cuenta aquí</v-btn>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="12" lg="6" md="6" sm="6" xs="12">
                    <nuxt-link to="/login" id="no-decoration">
                      <v-btn x-large color="white" outlined>Ingresa aquí</v-btn>
                    </nuxt-link>
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" class="pa-8">
              <v-card>
                <v-img :src="require('../static/mapImg.png')" alt="chale"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div id="main" class="hidden-lg-and-up hidden-xs-only py-12">
      <v-container>
        <div class="py-12">
          <v-row align="center" justify="center">
            <v-col cols="12" lg="6" md="6" sm="12" id="present">
              <p class="display-2 font-weight-light  px-4" id="title">Que el tráfico no te detenga</p>
              <p class="title font-weight-light px-4">Nuestro objetivo es informar a la población de Oaxaca, sobre cualquier problema que pueda perjudicar la movilidad dentro de la ciudad.</p>
              <div class="pt-12 px-6" align="center" justify="center">
                <v-row align="center" justify="center">
                  <v-col cols="12" md="6" sm="6" xs="12">
                    <nuxt-link to="/select" id="no-decoration">
                      <v-btn block id="button" x-large color="white" elevation="12">Crea tu cuenta aquí</v-btn>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="12" md="6" sm="6" xs="12">
                    <nuxt-link to="/login" id="no-decoration">
                      <v-btn x-large block color="white" outlined>Ingresa aquí</v-btn>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="12" md="12" sm="12" xs="12"></v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" class="px-2">
              <v-card>
                <v-img :src="require('../static/mapImg.png')" alt="chale"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div id="main" class="hidden-sm-and-up py-12">
      <v-container>
        <div class="py-12">
          <v-row align="center" justify="center">
            <v-col cols="12" lg="6" md="6" sm="12" id="present">
              <p class="display-2 font-weight-light  px-4" id="title">Que el tráfico no te detenga</p>
              <p class="title font-weight-light px-4">Nuestro objetivo es informar a la población de Oaxaca, sobre cualquier problema que pueda perjudicar la movilidad dentro de la ciudad.</p>
              <div class="pt-12 px-6" align="center" justify="center">
                <v-row align="center" justify="center">
                  <v-col cols="12" md="6" sm="6" xs="12">
                    <nuxt-link to="/select" id="no-decoration">
                      <v-btn block id="button" x-large color="white" elevation="12">Crea tu cuenta aquí</v-btn>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="12" md="6" sm="6" xs="12">
                    <nuxt-link to="/login" id="no-decoration">
                      <v-btn block x-large color="white" outlined>Ingresa aquí</v-btn>
                    </nuxt-link>
                  </v-col>
                  <v-col cols="12" md="12" sm="12" xs="12"></v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" class="px-2 hidden-xs-only">
              <v-card>
                <v-img :src="require('../static/mapImg.png')" alt="chale"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="py-6" align="center" justify="center">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <div>
              <h1>¿Por qué Oaxacaos?</h1>
            </div>
          </v-col>
          <v-col
          class="py-2"
          cols="12"
          xl="10"
          lg="10"
          md="10"
          sm="10"
          xs="11"
          >
            <texto />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import texto from '../components/text'
export default {
  components: {
    texto
  }
}
</script>

<style>
  #main {
    background: linear-gradient(#F95738, #EE964B);
  }

  #present {
    color: white;
  }

  #button {
    color: #F95738;
  }

  #no-decoration {
    text-decoration: none;
  }

</style>
