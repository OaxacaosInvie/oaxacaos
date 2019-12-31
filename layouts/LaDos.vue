<template>
  <div>
    <v-app>
      <v-app-bar
        color="white"
        flat
        align="center"
        justify="center"
      >
        <v-spacer></v-spacer>
        <nuxt-link to="/" id="no-decoration">
          <v-btn text><img src="../static/logoColor.png" alt="ayuda" width="200"></v-btn>
        </nuxt-link>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-content class="w">
        <nuxt />
      </v-content>
      <v-footer color="white">
        <v-spacer></v-spacer>
        <div class="font-weight-light" style="color: #F95738">&copy; {{ new Date().getFullYear() }} - Oaxacaos</div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .w {
    background: white;
  }
</style>
