<template>
  <div class="offcanvas offcanvas-end" tabindex="-1"
       id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="cartOffcanvasLabel">Cart</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" style="margin-bottom: 68px;">
      <div class="d-flex flex-column">
        <ul class="list-group list-group-flush px-0">
          <li class="list-group-item p-1">
            <span class="container-fluid">
              <span class="row gx-3 d-flex align-items-center">
                <img class="col-2" src="../assets/img/sh8.jpg" alt="Product">
                <span class="col-8">
                  <span class="row">
                    <span class="col-12 d-inline-block overflow-ellipsis">
                      Summer suit jkdhbgvkduhfvbikduhvfb siyhdsbfgivkhdbfkjdhbfv
                    </span>
                  </span>
                  <span class="row">
                    <span class="col-6 d-flex justify-content-start">$113</span>
                    <span class="col-6 d-flex justify-content-end">×2</span>
                  </span>
                </span>
                <span class="col-2 d-flex justify-content-end">
                  <button type="button" class="btn btn-danger delete-product-btn d-inline-flex
                  justify-content-center align-items-center">
                    <span class="material-symbols-sharp">
                      close
                    </span>
                  </button>
                </span>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div id="cartOffcanvasBottom"
         class="position-absolute bottom-0 w-100 bg-white p-2">
        <span class="d-flex justify-content-around mb-1" data-bs-dismiss="offcanvas">
          <a class="btn btn-lg btn-outline-danger fw-bold m-0" href="#">Cart</a>
          <a class="btn btn-lg btn-outline-secondary fw-bold m-0" href="#">Checkout</a>
        </span>
    </div>
  </div>
</template>
<script setup>
</script>