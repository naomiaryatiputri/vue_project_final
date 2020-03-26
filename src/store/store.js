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

    absence:[],

    details:[],
    add:{}

    leaveRequest:[],
    statusLR:[],
    activeStatusLR: 'all',

    calendar: []
  },

  getters:{
    // calemdar
    getCalendar(state) {
      return state.calendar
    },    

    // employee
    getEmployees(state) {
      return state.employees
    },
    getStatus(state) {
			return state.status 
    },
    getActiveStatus(state) {
			return state.activeStatus
    },
  
    // applicant
    getApplicant(state) {
      return state.applicant
    },
    getStatusA(state) {
			return state.statusA
    },
    getActiveStatusA(state) {
			return state.activeStatusA
    },
  
    // leave request
    getLeaveRequest(state) {
      return state.leaveRequest
    },
    getStatusLR(state) {
			return state.statusLR
    },
    getAddNew(state) {
      return state.add
    },
    getAbsence(state) {
      return state.absence
    },

    getActiveStatusLR(state) {
			return state.activeStatusLR
    },

  },

  actions: {
    // calendar
    fetchCalendar ({commit}) {
      console.log("calendar")
			axios.get('http://localhost:3000/calendar')
				.then(response => {
					commit ('fillCalendar', response.data)
				} 
			)
    },

    // employee
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

    // applicant
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
    },
    fetchAbsence ({commit}) {
      console.log("absence")
      axios.get('http://localhost:3000/absence')
        .then(response => {
          commit ('fillAbsence', response.data)
        } 
      )
    },
      
    // leave request
    fetchLeaveRequest ({commit}) {
      console.log("leaveRequest")
			axios.get('http://localhost:3000/leave-request')
				.then(response => {
					commit ('fillLeaveRequest', response.data)
				} 
			)
    },
		fetchStatusLR ({commit}) {
      axios.get('http://localhost:3000/statusLeaveRequest')
        .then(response => {
					commit ('fillStatusLR', response.data)  
				} 
			)
    },
    setActiveStatusLR({commit}, payload) {
			commit ('setActiveStatusLR', payload)
    }, 
  },

  mutations: {
    // calendar
    fillCalendar (state, payload) {
			state.calendar = payload
    },

    // employee
    fillEmployees (state, payload) {
			state.employees = payload
    },
    fillStatus (state, payload) {
			state.status = payload
    },
    setActiveStatus (state, payload) {
			state.activeStatus = payload
    },

    // applicant
    fillApplicant (state, payload) {
			state.applicant = payload
    },
    fillStatusA (state, payload) {
			state.statusA = payload
    },
    setActiveStatusA (state, payload) {
			state.activeStatusA = payload
    },

    // leave request
    fillLeaveRequest (state, payload) {
      state.leaveRequest = payload
    },
    fillStatusLR (state, payload) {
      state.statusLR = payload
    },
<<<<<<< HEAD
    addNew (state, payload) {
      state.getAddNew = payload
    },
    fillAbsence (state, payload) {
      state.absence = payload
    },
=======
    setActiveStatusLR (state, payload) {
      state.activeStatusLR = payload
    },

>>>>>>> 7c5c06743ea36251753a141b15387b76fb95b4f0
  }
});