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
              <v-form ref="form" v-model="valid">
                <v-container>
                  <div class="px-6" align="center" justify="center">
                    <v-text-field
                      v-model="account.email"
                      :rules="emailRules"
                      label="Correo electrónico"
                      required
                      dark
                      type="email"
                      color="white"
                    ></v-text-field>
                    <v-text-field
                      v-model="account.password"
                      :rules="passwordRules"
                      label="Contraseña"
                      type="password"
                      required
                      dark
                      color="white"
                    ></v-text-field>
                    <div class="pt-6">
                      <v-btn id="btn-login" color="white" elevation="0" rounded v-on:click="login">Ingresar</v-btn>
                    </div>
                  </div>
                </v-container>
              </v-form>
              <div style="color: white" class="py-6">
                <p class="font-weight-light">¿Aún no tienes cuenta? <nuxt-link to="/select" id="no-decoration" style="color:white" class="font-weight-bold">Regístrate aquí</nuxt-link></p>
              </div>
              <div v-if="isError" style="color: white" class="py-6">
                <p class="font-weight-light">{{ errorMsg }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import firebase from 'firebase'
import { setTimeout } from 'timers'
import navLog from '../components/navLog'

export default {
  layout: 'NoAppBar',
  components: {
    navLog
  },
  data: () => ({
    account: {
      password: '',
      email: ''
    },
    valid: false,
    passwordRules: [
      v => !!v || 'Necesitas escribir tu contraseña para entrar'
    ],
    emailRules: [
      v => !!v || 'Necesitas escribir tu correo para entrar',
      v => /.+@.+/.test(v) || 'Dirección de correo inválida'
    ],
    isError: false,
    errorMsg: ''
  }),
  methods: {
    login () {
      this.$store.dispatch('users/login', this.account).catch(error => {
        this.isError = true
        this.errorMsg = error.code
        setTimeout(() => {
          this.isError = false
        }, 10000)
      })
      this.$router.push('/admin/home')
      // try {
      //   firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      // } catch (error) {
      //   console.log(error)
      // }
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
