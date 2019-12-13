<template id="back">
  <div>
    <navLog />
    <div class="py-12" align="center" justify="center">
      <v-container>
        <v-row>
          <v-col
          cols="12"
          xl="2"
          lg="3"
          md="1"
          sm="1"
          xs="1"></v-col>
          <v-col
          cols="12"
          xl="8"
          lg="6"
          md="10"
          sm="10"
          xs="10">
            <div class="hidden-xs-only">
              <v-card flat>
                <div>
                  <h1 class="py-6">Inicia sesión</h1>
                  <div class="pa-6">
                    <div class="px-12 mx-12 pb-12">
                      <v-text-field label="Email" type="email" color="rgb(249,87,56)" req></v-text-field>
                      <v-text-field label="Contraseña" type="password" color="rgb(249,87,56)"></v-text-field>
                    </div>
                    <div class="pb-12">
                      <v-btn class="px-12 mx-12" id="h" large elevation="0">Crea tu cuenta aquí</v-btn>
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
            <div class="hidden-sm-and-up px-2">
              <v-card flat>
                <div>
                  <h1 class="py-6">Inicia sesión</h1>
                  <div class="pa-6">
                    <div class="px-6 pb-6">
                      <v-text-field label="Email" type="email" color="rgb(249,87,56)" req></v-text-field>
                      <v-text-field label="Contraseña" type="password" color="rgb(249,87,56)"></v-text-field>
                    </div>
                    <div class="pb-12">
                      <v-hover>
                        <v-btn text>hola</v-btn>
                      </v-hover>
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col
          cols="12"
          xl="2"
          lg="3"
          md="1"
          sm="1"
          xs="1"></v-col>
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
  #h {
    color: white;
    background: linear-gradient(90deg, rgba(8,61,119,1) 0%, rgba(249,87,56,1) 100%);
  }
</style>
