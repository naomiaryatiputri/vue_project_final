<template>
    <div>   
        <!-- Header -->
        <app-header></app-header>
        
        <!-- Menu -->
        <app-menu></app-menu>
        
        <!-- Body -->
        <div class="content-wrapper">
          <!-- Content Header (Page header) -->
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <!-- Header -->
                <div class="col-sm-6">
                  <h1>Dashboard</h1>
                </div>
              </div>
            </div>
          </section>

          <!-- Main content -->
          <section class="content">
            <!-- row top -->
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4">
                <!-- total -->
                <div class="info-box mb-4">
                  <span class="info-box-icon"><i class="fas fa-users"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text text-xl">Total Employee</span>
                    <span class="info-box-number text-xl" v-if="Employees()">{{ employee }}</span>
                  </div>
                </div>
              </div>
              <!-- out -->
              <!-- <div class="col-12 col-sm-6 col-md-4">
              
                <div class="info-box mb-4">
                  <span class="info-box-icon"><i class="fas fa-user"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text text-xl">Out Today</span>
                    <span class="info-box-number text-xl" v-if="Out()">{{ out }}</span>
                  </div>
                </div>
              </div> -->
              <!-- present -->
              <!-- <div class="col-12 col-sm-6 col-md-4">
                <div class="info-box mb-4">
                  <span class="info-box-icon"><i class="fas fa-building "></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text text-xl">Today's Present</span>
                    <span class="info-box-number text-xl" v-if="Present()">{{ present }}</span>
                  </div>
                </div>
              </div> -->
            </div>

            <!-- row buttom -->
            <div class="row">
              <!-- Event -->
              <app-calendar></app-calendar>
              
              <!-- New Applicant -->
              <app-new-applicant></app-new-applicant>
            </div>

          </section>



        </div>

        <!-- Footer -->
        <app-footer></app-footer>
    </div>
    
</template>
<script>
import AppHeader from './../components/header/Header.vue'
import AppMenu from './../components/menu/Menu.vue'
import AppNewApplicant from './../components/body/NewApplicant.vue'
import AppCalendar from './../components/body/Calendar.vue'
import AppFooter from './../components/footer/Footer.vue'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return{
      activeStatus: "permanent",
      employee : 0,
      present : 0,
      out : 0
    }
  },
  computed: {
    ...mapGetters ({
      getEmployees : 'getEmployees',
      getStatus : 'getStatus',
      getActiveStatus : 'getActiveStatus',
      getAbsence : 'getAbsence'
    }),
    getData() {
      return this.getEmployees.filter(ob=>ob.status===this.activeStatus)
    },
  },
  methods: {
    ...mapActions ({
      fetchEmployees : 'fetchEmployees',
      fetchStatus: 'fetchStatus',
      setActiveStatus : 'setActiveStatus',
      fetchAbsence : 'fetchAbsence'
    }),
    setActiveStatus(a) {
      // console.log (a)
      this.activeStatus=a;
    },
    del(id){
    
        axios.delete('http://localhost:3000/employees/' + id).then(res =>{
          alert("Berhasil didelete")
          this.created()
          this.getData()
        })
    },
    Employees(){
      
      var check = this.getEmployees
      this.employee = check.length
      return true
    },
    Present(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      today = yyyy + '-' + mm + '-' + dd;
      var check = this.getAbsence.filter(ob => ob.date === today)
      if(check.length == 0){
        this.present = 0
      } else {
        this.present = check[0].data.length
      }
      return true

    },
    Out(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      today = yyyy + '-' + mm + '-' + dd;
      var check = this.getAbsence.filter(ob => ob.date === today)
      if(check.length == 0){
        this.out = 0
      } else {
        var sum = 0
        for (var i = 0; i < check[0].data.length; i++) {

          if(check[0].data[i].out != ''){
              sum++
          }
        }
        this.out = sum
      }
      return true
    }
  },
  created() {
    this.fetchEmployees(),
    this.fetchStatus(),
    this.fetchAbsence()
  },
  components:{
        AppHeader,
        AppMenu,
        AppNewApplicant,
        AppCalendar,
        AppFooter

  },
    beforeRouteEnter (to, from, next) {
      $cookies.get('login') ? next() : next({ name: 'login', query: { redirect: 'home' } })
  }
}


</script>