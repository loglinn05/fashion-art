<script setup>
import Navbar from "./components/layout/Navbar.vue";
import CartOffcanvas from "./components/CartOffcanvas.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <Navbar></Navbar>
  <CartOffcanvas></CartOffcanvas>
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>
