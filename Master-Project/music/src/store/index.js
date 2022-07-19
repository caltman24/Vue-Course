import { createStore } from "vuex";

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    // Changing / Updating the state
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    getAuthModalShow: (state) => state.authModalShow,
  },
});
