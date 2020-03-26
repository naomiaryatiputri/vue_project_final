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
                    <span class="info-box-number text-xl">{{ getEmployeesCount(id) }}</span>
                  </div>
                </div>
              </div>
              <!-- out -->
              <div class="col-12 col-sm-6 col-md-4">
              
                <div class="info-box mb-4">
                  <span class="info-box-icon"><i class="fas fa-user"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text text-xl">Out Today</span>
                    <span class="info-box-number text-xl">2,000</span>
                  </div>
                </div>
              </div>
              <!-- present -->
              <div class="col-12 col-sm-6 col-md-4">
                <div class="info-box mb-4">
                  <span class="info-box-icon"><i class="fas fa-building "></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text text-xl">Today's Present</span>
                    <span class="info-box-number text-xl">2,000</span>
                  </div>
                </div>
              </div>
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
import { mapGetters } from 'vuex'


export default {
  components:{
      AppHeader,
      AppMenu,
      AppNewApplicant,
      AppCalendar,
      AppFooter
  },
  computed: {
    ...mapGetters ({
			getEmployees : 'getEmployees',
		}),
  },
	methods: {
		getEmployeesCount(a) {
			return this.getEmployees.filter(ob=>ob.id===a.id).length
    },
    beforeRouteEnter (to, from, next) {
      $cookies.get('login') ? next() : next({ name: 'login', query: { redirect: 'home' } })
    }
	},
}


</script>