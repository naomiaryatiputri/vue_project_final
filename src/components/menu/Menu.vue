<template>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="#" class="brand-link">
    <span class="brand-text font-weight-light" style="color:#fff">HR APP</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user (optional) -->
    

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
        <li class="nav-item has-treeview">
          <a href="/home" class="nav-link">
            <i class="nav-icon fas fa-laptop"></i>
            <p>
              Dashboard
              <!-- <i class="right fas fa-angle-left"></i> -->
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-th"></i>
            <p>
              Employees
              <i class="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="/employee" class="nav-link">
                <p>View</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/employee/add" class="nav-link">
                <p>Add</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-copy"></i>
            <p>
              Attendence
              <i class="fas fa-angle-left right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="/attendance" class="nav-link">
                <p>Presence</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/leave-request" class="nav-link">
                <p>Leave Request</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/leave-request/add" class="nav-link">
                <p>Add Leave Request</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-folder-open"></i>
            <p>
              Applicants
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="/applicant" class="nav-link">
                <p>View</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/applicant/add" class="nav-link">
                <p>Add</p>
              </a>
            </li>
          </ul>
        </li>
        <!-- <li class="nav-header">EXAMPLES</li> -->
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data(){
      return{
          photo: ''
      }
  },
  computed: {
    ...mapGetters ({
      getEmployees: 'getEmployees'
    }),
  },
  methods: {
    ...mapActions ({
      fetchEmployees : 'fetchEmployees'
    }),
    photos(){
        var a = this.getEmployees.filter(ob => ob.id === parseInt(this.$cookies.get('login'), 10))
        return a[0].photo
    }
   
  },
    created() {
    this.fetchEmployees()
  }
  
}
</script>