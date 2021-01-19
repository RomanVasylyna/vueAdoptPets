import Vue from 'vue'
import Vuex from 'vuex'

import cats from '../data/cats.js';
import dogs from '../data/dogs.js';

Vue.use(Vuex)

// Vuex is like a global object for the whole application

export default new Vuex.Store({

  state: {
  pets: [...cats, ...dogs]
  },

  mutations: {
  appendPet: (state, { species, pet }) => {
  state[species].push(pet)
  }  
  },

  actions: {
  addPet: ({ commit }, payload) => {
  commit('appendPet', payload)
  }
  },

  modules: {
  },

  getters: {
  animalsCount: (state) => {
  return state.cats.length + state.dogs.length;
  },
  
  getAllCats: () => {
  
  }
  }

})
