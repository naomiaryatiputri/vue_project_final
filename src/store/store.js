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
    getDetails(state) {
      return state.details
    },
    getAddNew(state) {
      return state.add
    }
  },
  actions: {
    // async add({dispatch}, payload){
    //   try{
    //     await axios.post('http://localhost:3000/employees',{
    //       "name": payload.name,
    //       "email": payload.email,
    //       "telp":payload.telp,
    //       "address":payload.address,
    //       "gender":payload.gender,
    //       "birth":payload.birth,
    //       "depart":payload.depart,
    //       "status":payload.statusE
    //     })
    //   }catch(e){
    //     console.log(e.response)
    //   }
    //   dispatch('fect')
    // },
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
    addToDetails (state, payload) {
      state.details.push(payload)
    },
    addNew (state, payload) {
      state.getAddNew = payload
    }
  }
});