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
                  <h1>Employee</h1>
                </div>
                <!-- Breadcrums -->


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
  },

}
</script>