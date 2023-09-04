import {
  createStore,

} from "vuex";
export default createStore({
  state: {
    auth: false,
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
  },
  actions: {
    setAuth(context, auth) {
      context.commit('setAuth', auth);

    }
  }

})