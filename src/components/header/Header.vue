<template>
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
<!-- Left navbar links -->
<ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
  </li>  
</ul>
<!-- Right navbar links -->
<ul class="navbar-nav ml-auto">
  <li class="nav-item">
    <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" @click="logOut">
      <i class="fas fa-sign-out-alt">SIGN OUT</i>
    </a>
  </li>
</ul>
</nav>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default{
    data(){
      
    },
    computed:{
      
    },
    methods:{
     
      logOut(){
        this.$cookies.remove('login');
        this.$router.push({ name: 'login', query: { redirect: 'home' } });
      }
    }
    
  }
</script>