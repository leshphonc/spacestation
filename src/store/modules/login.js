import login from "../../api/login";

// initial state
// shape: [{ id, quantity }]
const state = {};

// getters
const getters = {};

// actions
const actions = {
  login(store, payload) {
    // empty cart
    login.login(payload.account, payload.pwd);
  }
};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
