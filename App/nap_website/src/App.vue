<script setup>
import { RouterLink, RouterView } from 'vue-router'
//components
import Heider from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Heider/>
  <RouterView/>
  <Footer/>
</template>