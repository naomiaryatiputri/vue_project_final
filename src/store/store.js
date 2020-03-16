import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    employees:[]
  },
  getters:{
    getEmployees(state){
      return state.employees
    },

  },
  actions: {
    fetchEmployees ({commit}) {
      console.log("employee")
			axios.get('http://localhost:3000/employees')
				.then(response => {
					commit ('fillEmployees', response.data)
				} 
			)
    }
  },
  mutations: {
    fillEmployees (state, payload) {
			state.employees = payload
		},
  }

});