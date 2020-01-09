<template>
  <div align="center" justify="center">
    <div>
      <v-container>
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            xl="5"
            lg="5"
            md="8"
            sm="8"
            xs="12">
            <div class="py-6">
              <div class="blueee py-6">
                <h1 id="blueGra" class="display-1 font-weight-bold">Regístrate</h1>
                <p class="title font-weight-light">Crea tu cuenta y mantente al tanto de lo que ocurre en las calles de Oaxaca.</p>
              </div>
              <v-form>
                <v-container>
                  <div class="px-6" align="center" justify="center">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      label="Nombre"
                      required
                      type="tex"
                      color="#083d77"
                    ></v-text-field>
                    <v-text-field
                      v-model="lastN"
                      :rules="lastNRules"
                      label="Apellidos"
                      required
                      type="text"
                      color="#083d77"
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="Correo electrónico"
                      required
                      type="email"
                      color="#083d77"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Contraseña"
                      counter
                      @click:append="show1 = !show1"
                      color="#F95738"
                    ></v-text-field>
                    <v-text-field
                      v-model="token"
                      :rules="tokenRules"
                      required
                      label="Código de acceso"
                      color="#083d77"
                    ></v-text-field>
                    <div class="py-6">
                      <v-btn dark color="#083d77" elevation="0" rounded v-on:click="signAdmin">Ingresar</v-btn>
                    </div>
                  </div>
                </v-container>
              </v-form>
              <div style="color:#083d77">
                <p class="font-weight-light">¿Ya tienes cuenta? <nuxt-link to="/login" id="no-decoration" style="color:#083d77" class="font-weight-bold">Inicia sesión aquí</nuxt-link></p>
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
export default {
  layout: 'LaDos',
  data () {
    return {
      show1: false,
      valid: false,
      password: '',
      rules: {
        required: value => !!value || 'Necesitas rellenar este campo',
        min: v => v.length >= 8 || 'Se requieren mínimo 8 caracteres'
      },
      email: '',
      emailRules: [
        v => !!v || 'Necesitas rellenar este campo',
        v => /.+@.+/.test(v) || 'Dirección de correo inválida'

      ],
      name: '',
      nameRules: [
        v => !!v || 'Necesitas rellenar este campo'
      ],
      lastN: '',
      lastNRules: [
        v => !!v || 'Necesitas rellenar este campo'
      ],
      token: '',
      tokenRules: [
        v => !!v || 'Necesitas rellenar este cambio'
      ]
    }
  },
  methods: {
    signAdmin () {
      try {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        const user = firebase.auth().currentUser
        firebase.database().ref('users/' + user.uid.toString()).set({
          name: this.name,
          lastName: this.lastN,
          email: this.email
        })
      } catch (error) {
        console.log(`Esto es un error: ${error}`)
      }
    }
  }
}
</script>

<style>
  #blueGra {
    background: -webkit-linear-gradient(#083d77, #086e77);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .blueee {
    color: #083d77;
  }
</style>
