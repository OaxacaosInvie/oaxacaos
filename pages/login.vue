<template id="back">
  <div>
    <navLog />
    <div class="py-12" align="center" justify="center">
      <v-container>
        <v-row>
          <v-col
          cols="12"
          xl="2"
          lg="2"
          md="1"
          sm="1"
          xs="12"></v-col>
          <v-col
          cols="12"
          xl="8"
          lg="8"
          md="10"
          sm="10"
          xs="12">
            <div class="hidden-xs-only">
              <v-card id="card" flat>
                <div>
                  <v-row align="center" justify="center">
                    <v-col
                    cols="12"
                    xl="6"
                    lg="6"
                    md="6">
                      <v-container>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In hic incidunt sint, doloremque sed porro aliquam, nihil id quis commodi neque alias, assumenda fuga ex! Voluptate quaerat ducimus quasi iste!
                      </v-container>
                    </v-col>
                    <v-col
                    cols="12"
                    xl="6"
                    lg="6"
                    md="6">
                      <v-form ref="form" v-model="valid">
                        <v-container>
                          <v-row>
                            <v-col>
                                <div class="py-12 px-6 mr-3" align="center" justify="center">
                                  <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="Correo electrónico"
                                    required
                                    dark
                                    type="email"
                                    color="white"
                                  ></v-text-field>
                                  <v-text-field
                                    v-model="password"
                                    :rules="passwordRules"
                                    label="Contraseña"
                                    type="password"
                                    required
                                    dark
                                    color="white"
                                  ></v-text-field>
                                  <v-btn large>hola</v-btn>
                                </div>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col
          cols="12"
          xl="2"
          lg="2"
          md="1"
          sm="1"
          xs="12"></v-col>
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
  },
  data: () => ({
    valid: false,
    password: '',
    passwordRules: [
      v => !!v || 'Necesitas escribir tu contraseña para entrar'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Necesitas escribir tu correo para entrar',
      v => /.+@.+/.test(v) || 'Dirección de correo inválida'
    ]
  })
}
</script>

<style>
  /*background: linear-gradient(45deg, rgba(8,110,119,1) 0%, rgba(8,61,119,1) 100%);*/
  #card {
    background: linear-gradient(90deg, #F95738 50%, #083D77 50%);
  }
  v-text-field {
    color: red;
  }
</style>
