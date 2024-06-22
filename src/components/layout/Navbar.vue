<script setup>
import { onMounted } from "vue";
import { multilevelDropdownToggle } from "../../modules/multilevelDropdownToggle.js";
import { navbarChangeColorOnScroll } from "../../modules/navbarChangeColorOnScroll.js";

onMounted(() => {
  navbarChangeColorOnScroll()

  multilevelDropdownToggle();
})
</script>

<template>
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top w-100 py-3 px-xl-4">
    <div class="container-fluid mw-2000">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="../../assets/img/brand-logo.png" class="d-inline-block align-center" alt="Fashion Art brand logo">
        <span class="navbar-text">Fashion Art</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link btn dropdown-toggle text-start" href="#"
               data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu">
              <li class="dropdown dropend">
                <a class="dropdown-item dropdown-toggle"
                   href="#" data-bs-toggle="dropdown"
                   aria-expanded="false">
                  Clothes
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/products" class="dropdown-item">
                    Men's clothing
                  </router-link></li>
                  <li><router-link to="/products" class="dropdown-item">
                    Women's clothing
                  </router-link></li>
                </ul>
              </li>
              <li class="dropdown dropend">
                <a class="dropdown-item dropdown-toggle"
                   href="#" data-bs-toggle="dropdown"
                   aria-expanded="false">
                  Shoes
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/products" class="dropdown-item">
                    Men's shoes
                  </router-link></li>
                  <li><router-link to="/products" class="dropdown-item">
                    Women's shoes
                  </router-link></li>
                </ul>
              </li>
              <li class="dropdown dropend">
                <a class="dropdown-item dropdown-toggle"
                   href="#" data-bs-toggle="dropdown"
                   aria-expanded="false">
                  Accessories
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/products" class="dropdown-item">
                    Mens' accessories
                  </router-link></li>
                  <li><router-link to="/products" class="dropdown-item">
                    Women's accessories
                  </router-link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Payment</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Delivery</a>
          </li>
        </ul>
        <hr class="d-lg-none"/>
        <div class="d-flex flex-row">
          <div class="btn-group">
            <button type="button" class="btn nav-button dropdown-toggle d-flex align-items-center border-0 p-0 me-3"
                    data-bs-toggle="dropdown" aria-expanded="false">
              <span class="material-symbols-sharp">
                account_circle
              </span>
            </button>
            <ul class="dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
              <li><a class="dropdown-item" href="#">Log In</a></li>
              <li><a class="dropdown-item" href="#">Register</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
            </ul>
          </div>
          <a class="nav-button position-relative me-3" data-bs-toggle="offcanvas"
             href="#cartOffcanvas" role="button" aria-controls="cartOffcanvas">
            <span class="material-symbols-sharp">
              shopping_cart
            </span>
            <span class="position-absolute top-0 start-100 translate-middle
            bg-danger d-flex justify-content-center align-items-center text-white px-1"
                  style="border-radius: 10px">
              <span style="font-size: 0.75em">99+</span>
              <span class="visually-hidden">products in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>

</template>

<style scoped>
@import '../../assets/css/navbar.css';

.nav-link.dropdown-toggle::after {
  margin-left: 0;
  vertical-align: 0.15em;
}
</style>