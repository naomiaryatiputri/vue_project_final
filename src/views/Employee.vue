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
                    <li class="breadcrumb-item"><a href="#">Layout</a></li>
                    <li class="breadcrumb-item active">Fixed Layout</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <!-- Main content -->
          <section class="content">
						<app-table></app-table>
            
            
            


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
import AppTable from './../components/body/Table.vue'
import AppFooter from './../components/footer/Footer.vue'
export default {
    components:{
        AppHeader,
				AppMenu,
				AppTable,
        AppFooter

    }
}
</script>