<script setup>
import Navbar from "./components/layout/Navbar.vue";
import CartOffcanvas from "./components/CartOffcanvas.vue";
import ViewProductModal from "./components/ViewProductModal.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <Navbar />
  <CartOffcanvas />
  <ViewProductModal />
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer />
</template>
