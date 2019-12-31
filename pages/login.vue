<template id="back">
  <div>
    <navLog />
    <div class="py-12" align="center" justify="center">
      <v-container>
        <v-row align="center" justify="center">
          <v-col
          cols="12"
          xl="5"
          lg="5"
          md="8"
          sm="8"
          xs="12">
            <div class="py-12">
              <div style="color: white">
                <h1 class="display-1 font-weight-bold">Inicio de sesión</h1>
                <p class="title font-weight-light">¡Hola! Es un gusto verte de vuelta.</p>
              </div>
              <v-form
              ref="form"
              submit.prevent="login"
              >
                <v-container>
                  <div class="px-6" align="center" justify="center">
                    <v-text-field
                      v-model="email"
                      label="Correo electrónico"
                      dark
                      type="email"
                      color="white"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      label="Contraseña"
                      type="password"
                      dark
                      color="white"
                    ></v-text-field>
                    <div class="pt-6">
                      <v-btn id="btn-login" color="white" elevation="0" rounded>Ingresar</v-btn>
                    </div>
                  </div>
                </v-container>
              </v-form>
              <div style="color: white" class="py-6">
                <p class="font-weight-light">¿Aún no tienes cuenta? <nuxt-link to="/select" id="no-decoration" style="color:white" class="font-weight-bold">Regístrate aquí</nuxt-link></p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import navLog from '../components/navLog'

export default {
  layout: 'NoAppBar',
  components: {
    navLog
  },
  data: () => ({
    password: '',
    email: ''
  }),
  asyncData () {
    return {
      authenticatedUser: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    }
  }
}
</script>

<style>
  /*background: linear-gradient(45deg, rgba(8,110,119,1) 0%, rgba(8,61,119,1) 100%);*/
  #btn-login {
    color: #083d77;
  }

  #btn-toggle-login {
    background: white;
  }
</style>
