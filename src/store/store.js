import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    employees:[],
    status:[],
    activeStatus: 'all',

    applicant:[],
    statusA:[],
    activeStatusA: 'all',

    details:[],
    add:{}
  },
	
  getters:{
    getEmployees(state) {
      return state.employees
    },
    getStatus(state) {
			return state.status 
    },
    getActiveStatus(state) {
			return state.activeStatus
    },
  
    getApplicant(state) {
      return state.applicant
    },
    getStatusA(state) {
			return state.statusA
    },
    getActiveStatusA(state) {
			return state.activeStatusA
    },

    getDetails(state) {
      return state.details
    },
    getAddNew(state) {
      return state.add
    }
  },
	
  actions: {
    fetchEmployees ({commit}) {
      console.log("employee")
			axios.get('http://localhost:3000/employees')
				.then(response => {
					commit ('fillEmployees', response.data)
				} 
			)
    },
		fetchStatus ({commit}) {
      axios.get('http://localhost:3000/status')
        .then(response => {
					commit ('fillStatus', response.data)  
				} 
			)
    },
    setActiveStatus({commit}, payload) {
			commit ('setActiveStatus', payload)
    },

    fetchApplicant ({commit}) {
      console.log("applicant")
			axios.get('http://localhost:3000/applicant')
				.then(response => {
					commit ('fillApplicant', response.data)
				} 
			)
    },
		fetchStatusA ({commit}) {
      axios.get('http://localhost:3000/statusApplicant')
        .then(response => {
					commit ('fillStatusA', response.data)  
				} 
			)
    },
    setActiveStatusA({commit}, payload) {
			commit ('setActiveStatusA', payload)
    },  

    addToDetails({commit}, payload) {
      commit ('addToDetails', payload)
    }
  },
	
  mutations: {
    fillEmployees (state, payload) {
			state.employees = payload
    },
    fillStatus (state, payload) {
			state.status = payload
    },
    setActiveStatus (state, payload) {
			state.activeStatus = payload
    },

    fillApplicant (state, payload) {
			state.applicant = payload
    },
    fillStatusA (state, payload) {
			state.statusA = payload
    },
    setActiveStatusA (state, payload) {
			state.activeStatusA = payload
    },
  
    addToDetails (state, payload) {
      state.details.push(payload)
    },
    addNew (state, payload) {
      state.getAddNew = payload
    }
  }
});
