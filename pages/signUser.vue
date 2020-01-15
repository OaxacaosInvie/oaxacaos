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
              <div class="reddd py-6">
                <h1 id="redGra" class="display-1 font-weight-bold">Regístrate</h1>
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
                      color="#F95738"
                    ></v-text-field>
                    <v-text-field
                      v-model="lastN"
                      :rules="lastNRules"
                      label="Apellidos"
                      required
                      type="text"
                      color="#F95738"
                    ></v-text-field>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="Correo electrónico"
                      required
                      type="email"
                      color="#F95738"
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
                      label="Número de telefono"
                      color="#F95738"
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      aria-required
                    ></v-text-field>
                    <div class="py-6">
                      <v-btn dark color="#F95738" elevation="0" rounded v-on:click="sign">Ingresar</v-btn>
                    </div>
                  </div>
                </v-container>
              </v-form>
              <div style="color:#F95738">
                <p class="font-weight-light">¿Ya tienes cuenta? <nuxt-link to="/login" id="no-decoration" style="color:#F95738" class="font-weight-bold">Inicia sesión aquí</nuxt-link></p>
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
      ]
    }
  },
  methods: {
    sign () {
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
  #redGra {
    background: -webkit-linear-gradient(#F95738, #EE964B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .reddd {
    color: #F95738;
  }
</style>
