<script setup>
import Navbar from './components/layout/Navbar.vue'
import HeaderMain from './components/layout/HeaderMain.vue'
import HeaderOther from './components/layout/HeaderOther.vue'
import CartOffcanvas from './components/CartOffcanvas.vue'
import ViewProductModal from './components/ViewProductModal.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="container-fluid">
    <HeaderMain v-if="$route.name == 'home'" />
    <HeaderOther v-else />
    <CartOffcanvas />
    <ViewProductModal />
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
  <Footer />
</template>
