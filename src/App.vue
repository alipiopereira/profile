<template>
  <div id="app">
    <v-app :dark="dark">
      <v-app-bar app absolute :dark="dark" flat class="ma-2" style="border-radius: 10px;">
        <div class="ml-2">
          <ModalSendMessage :dark="this.dark" />
        </div>

        <div class="flex-grow-1"></div>

        <v-btn icon color="grey" href="https://www.github.com/alipiopereira" target="_blank" rel="noopener noreferrer">
          <v-icon>mdi-github</v-icon>
        </v-btn>

        <v-btn icon color="grey" @click="favorite = !favorite">
          <v-icon>{{this.favorite ? 'mdi-heart':'mdi-heart-outline'}}</v-icon>
        </v-btn>

        <v-btn icon color="grey"  @click="dark = !dark">
          <v-icon>{{this.dark ? 'mdi-white-balance-sunny':'mdi-weather-night'}}</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row justify="center">
            <v-avatar size="150" class="mt-2" style="border: 4px solid #eee">
              <img
                src="static/img/alipio_profile_dev.jpg"
                alt="Alipio Pereira"
              />
            </v-avatar>
          </v-row>

          <v-row justify="center">
            <h2>Alípio Pereira</h2>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" sm="12" md="4">
              <p
                class="text-center"
              >Sou desenvolvedor FullStack JavaScript e amante de Marketing Digital, disposto a contribuir seja com a sua campanha de marketing ou em um belo site.</p>
            </v-col>
          </v-row>

          <v-row justify="center" class="mt-5">
            <v-col cols="12" sm="12" md="4" class="text-center">
              <p
                class="text-center"
              >Habilidades</p>

              <v-chip color="#26da89" class="ma-1">Vuejs</v-chip>
              <v-chip color="#26da89" class="ma-1">Vite</v-chip>
              <v-chip color="#26da89" class="ma-1">Vuetify</v-chip>
              <v-chip color="#26da89" class="ma-1">VueRouter</v-chip>
              <v-chip color="#26da89" class="ma-1">Vuex</v-chip>
              <v-chip color="#26da89" class="ma-1">Firebase</v-chip>
              <v-chip color="#26da89" class="ma-1">AdonisJS</v-chip>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" sm="12" md="4">
            <p class="text-center">Há mais de 2 anos venho estudando o Vue, apesar de já ter usado React e Angular, não largo o Vue por nada!</p>
            </v-col>
          </v-row>

          <v-row justify="center" class="mt-5">
             <img
                src="static/img/shared_qr_code.png"
                alt="chamar no whatsapp"
                width="70"
                height="70"
              />
          </v-row>

          <p class="text-center">Estou a sua disposição!</p>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import ModalSendMessage from "./components/ModalSendMessage";

export default {
  name: "App",

  components: {
    ModalSendMessage,
  },

  data() {
    return {
      dark: false,
      favorite: false,
    };
  },

  mounted() {
    if (localStorage.getItem("dark")) {
      try {
        this.dark = JSON.parse(localStorage.getItem("dark"));
        this.$vuetify.theme.dark = this.dark;
      } catch (e) {
        localStorage.removeItem("dark");
      }
    }

    if (localStorage.getItem("favorite")) {
      try {
        this.favorite = JSON.parse(localStorage.getItem("favorite"));
      } catch (e) {
        localStorage.removeItem("favorite");
      }
    }
  },

  watch: {
    dark(value) {
      this.$store.dispatch("handleDark", value);
      this.$vuetify.theme.dark = value;
    },

    favorite(value) {
      this.$store.dispatch("handleFavorite", value);
    },
  },
};
</script>

<style>
#app {
  font-family: "Varela Round", sans-serif;
}
</style>
