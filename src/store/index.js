import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[]
  },
  mutations: {
    setData: function(state , newData){
      state.data.push(newData)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getData: function(state){
      return state.data
    }
  }
})
