<script setup>
import { onMounted, ref } from 'vue'
import { useCartStore } from '../stores/cartStore.js'
import { storeToRefs } from 'pinia'

onMounted(() => {
  const offcanvasBody = ref()
  const offcanvasBottom = ref()

  console.log(offcanvasBottom.value)
})

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)
const { deleteFromCart } = cartStore
</script>

<template>
  <div class="offcanvas offcanvas-end" tabindex="-1"
       id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="cartOffcanvasLabel">Cart</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" ref="offcanvasBody">
      <div class="d-flex flex-column">
        <ul class="list-group list-group-flush p-0">
          <li class="list-group-item p-0">
            <span class="container-fluid p-0 m-0">
              <span :class="'row gx-3 d-flex align-items-center' + (index > 0 ? ' mt-2' : '')"
                    v-for="(item, index) in cart">
                <img class="col-2" :src="item.product.images[0]" alt="Product">
                <span class="col-8">
                  <span class="row">
                    <span class="col-12 d-inline-block overflow-ellipsis">
                      {{ item.product.title }}
                    </span>
                  </span>
                  <span class="row">
                    <span class="col-6 d-flex justify-content-start">
                      ${{ parseFloat(item.product.price).toFixed(2) }}
                    </span>
                    <span class="col-6 d-flex justify-content-end">
                      ×{{ item.qty }}
                    </span>
                  </span>
                </span>
                <span class="col-2 d-flex justify-content-end">
                  <button type="button"
                          class="btn btn-danger delete-product-btn d-inline-flex
                          justify-content-center align-items-center"
                          @click="deleteFromCart(item.product.id)">
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
    <div class="offcanvas-bottom position-absolute bottom-0 w-100 bg-white p-2"
         ref="offcanvasBottom">
        <span class="d-flex justify-content-around mb-1" data-bs-dismiss="offcanvas">
          <a class="btn btn-lg btn-outline-danger fw-bold m-0" href="#">Cart</a>
          <a class="btn btn-lg btn-outline-secondary fw-bold m-0" href="#">Checkout</a>
        </span>
    </div>
  </div>
</template>