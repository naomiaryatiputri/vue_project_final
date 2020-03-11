<template>
    <div>   
        <app-header></app-header>
        <app-menu></app-menu>
        <div class="content-wrapper">
          <!-- Content Header (Page header) -->
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Fixed Layout</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Layout</a></li>
                    <li class="breadcrumb-item active">Fixed Layout</li>
                  </ol>
                </div>
              </div>
            </div><!-- /.container-fluid -->
          </section>

          <!-- Main content -->
          <section class="content">

            
              <div class="row">
                <div class="col-12">
                  
                </div>
              </div>
            
          </section>
          <!-- /.content -->
        </div>
        <app-footer></app-footer>
    </div>
    
</template>
<script>
import AppHeader from './Header.vue'
import AppMenu from './Menu.vue'
import AppFooter from './Footer.vue'
export default {
    components:{
        AppHeader,
        AppMenu,
        AppFooter

    }
}
</script>