import { createStore } from "vuex";

// Getters vs Mapping the state
// Getters are better for performing a calculation on the state
// Mapping the state is better for retrieving data from the state

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    // Changing / Updating the state
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  }
});
