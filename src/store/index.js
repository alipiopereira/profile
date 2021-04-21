import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    favotire: false,
    dark: false
  },

  mutations: {
    setDark(state, value) {
      localStorage.setItem("dark", value);
      state.dark = localStorage.getItem("dark");
    },

    setFavorite(state, value) {
      localStorage.setItem("favorite", value);
      state.favorite = localStorage.getItem("favorite");
    }
  },

  actions: {
    handleDark(context, value) {
      context.commit("setDark", value);
    },

    handleFavorite(context, value) {
      context.commit("setFavorite", value);
    }
  }
});

export default store;
