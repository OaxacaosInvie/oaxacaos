<template>
  <v-app>
    <v-content class="d">
      <nuxt />
    </v-content>
    <v-footer color="rgba(8,61,119,1)" dark>
      <v-spacer></v-spacer>
      <div class="font-weight-light">&copy; {{ new Date().getFullYear() }} - Oaxacaos</div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
  .d {
    /*background: linear-gradient(45deg, rgba(249,87,56,1) 0%, rgba(238,150,75,1) 50%, rgba(244,211,94,1) 100%);*/
    background: linear-gradient(180deg, rgba(8,110,119,1) 0%, rgba(8,61,119,1) 100%);
  }
</style>
