<template>
    <div class="wrapper">   
        <app-header></app-header>
        <app-menu></app-menu>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppMenu from './components/Menu.vue'
import AppFooter from './components/Footer.vue'
export default {
    components:{
        AppHeader,
        AppMenu,
        AppFooter

    }
}
</script>

<style>
</style>
