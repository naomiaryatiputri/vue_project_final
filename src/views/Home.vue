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
                <!-- Breadcrums -->
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <!-- Main content -->
          <section class="content">
            <!-- row top -->
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4">
                <!-- col 1 -->
                <div class="info-box mb-4">
                  <span class="info-box-icon"><i class="fas fa-users"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text text-xl">Total Employee</span>
                    <span class="info-box-number text-xl">2,000</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
              </div>
              <!-- col 2 -->
              <div class="col-12 col-sm-6 col-md-4">
              
                <div class="info-box mb-4">
                  <span class="info-box-icon"><i class="fas fa-user"></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text text-xl">Out Today</span>
                    <span class="info-box-number text-xl">2,000</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
              </div>
              <!-- col 3 -->
              <div class="col-12 col-sm-6 col-md-4">
                <div class="info-box mb-4">
                  <span class="info-box-icon"><i class="fas fa-building "></i></span>
                  <div class="info-box-content">
                    <span class="info-box-text text-xl">Today's Present</span>
                    <span class="info-box-number text-xl">2,000</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
              </div>
            </div>

            <!-- row buttom -->
            <div class="row">
              <div class="col-12 col-lg-6">
                <!-- new applicant -->
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">New Applicants</h3>

                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body p-0">
                    <ul class="users-list clearfix">
                      <li>
                        <img src="../assets/img/user8-128x128.jpg" alt="User Image">
                        <a class="users-list-name" href="#">Alexander Pierce</a>
                        <span class="users-list-date">Today</span>
                      </li>
                      <li>
                        <img src="../assets/img/user8-128x128.jpg" alt="User Image">
                        <a class="users-list-name" href="#">Norman</a>
                        <span class="users-list-date">Today</span>
                      </li>
                      <li>
                        <img src="../assets/img/user8-128x128.jpg" alt="User Image">
                        <a class="users-list-name" href="#">Jane</a>
                        <span class="users-list-date">12 Jan</span>
                      </li>
                    </ul>
                    <!-- /.users-list -->
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer text-center">
                    <a href="javascript::">View All Users</a>
                  </div>
                  <!-- /.card-footer -->
                </div>
                <!--/.card -->
              </div>
              <div class="col-12 col-lg-6">
                <!-- calendar -->
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Upcoming Events</h3>
                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body p-0">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th style="width: 10px"></th>
                          <th style="width: 45px">Task</th>
                          <th style="width: 45px">Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><i class="nav-icon fas fa-calendar text-lg"></i></td>
                          <td>Update software</td>
                          <td> Perayaan </td>
                        </tr>
                        <tr>
                          <td><i class="nav-icon fas fa-calendar text-lg"></i></td>
                          <td>Clean database</td>
                          <td>Clean database</td>
                        </tr>
                        <tr>
                          <td><i class="nav-icon fas fa-calendar text-lg"></i></td>
                          <td>Cron job running</td>
                          <td>Cron job running</td>
                        </tr>
                        <tr>
                          <td><i class="nav-icon fas fa-calendar text-lg"></i></td>
                          <td>Fix and squish bugs</td>
                          <td>Fix and squish bugs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- /.card-body -->
                </div>
              </div>
              <!-- /.col -->
            </div>

          </section>
          <!-- /.content -->


        </div>

        <!-- Footer -->
        <app-footer></app-footer>
    </div>
    
</template>
<script>
import AppHeader from './../components/header/Header.vue'
import AppMenu from './../components/menu/Menu.vue'
import AppFooter from './../components/footer/Footer.vue'
export default {
    components:{
        AppHeader,
        AppMenu,
        AppFooter

    },
    beforeRouteEnter (to, from, next) {
      $cookies.get('login') ? next() : next({ name: 'login', query: { redirect: 'home' } })
    },
}


</script>