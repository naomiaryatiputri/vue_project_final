import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    employees:[],
    status:[],
    activeStatus: 'all',
    details:[],
    add:{},
    applicant:[],
    statusApplicant:[],
    activeStatusApplicant:'all'
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
    getStatusApplicant(state) {
			return state.statusApplicant 
    },
    getActiveStatusApplicant(state) {
			return state.activeStatusApplicant
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
		fetchStatusApplicant ({commit}) {
      axios.get('http://localhost:3000/statusApplicant')
        .then(response => {
					commit ('fillStatusApplicant', response.data)  
				} 
			)
    },
    setActiveStatusApplicant({commit}, payload) {
			commit ('setActiveStatusApplicant', payload)
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
    fillStatusApplicant (state, payload) {
			state.statusApplicant = payload
    },
    setActiveStatusApplicant (state, payload) {
			state.activeStatusApplicant = payload
    },

    addToDetails (state, payload) {
      state.details.push(payload)
    },
    addNew (state, payload) {
      state.getAddNew = payload
    }
  }
});