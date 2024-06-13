<script setup>
import HeaderMain from "../components/layout/HeaderMain.vue";
import Benefits from "../components/Index/Benefits.vue";
import Popular from "../components/Index/PopularProducts.vue";
import Visit from "../components/Index/Visit.vue";
import NewProducts from "../components/Index/NewProducts.vue";
import FeaturedProducts from "../components/Index/FeaturedProducts.vue";
import Map from "../components/Index/Map.vue";
</script>

<template>
  <div class="container-fluid">
    <HeaderMain></HeaderMain>
    <Benefits></Benefits>
    <Popular></Popular>
    <Visit></Visit>
    <NewProducts></NewProducts>
    <FeaturedProducts></FeaturedProducts>
    <Map></Map>
  </div>
</template>