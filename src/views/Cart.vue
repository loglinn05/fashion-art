<script setup>
import InputNumber from 'primevue/inputnumber'
import { useCartStore } from '../stores/cartStore.js'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)
const { deleteFromCart } = cartStore
</script>

<template>
  <div class="row mw-2000 mx-auto px-lg-5 px-0 my-0">
    <section class="col-9">
      <div class="container-fluid">
        <div class="row border-top border-bottom cart-item"
             v-for="item in cart">
          <img class="col-2" :src="item.product.images[0]" alt="Product">
          <div class="col-6 d-inline-block overflow-ellipsis">
            {{ item.product.title }}
          </div>
          <div class="col-1 d-inline-block overflow-ellipsis">
            ${{ parseFloat(item.product.price).toFixed(2) }}
          </div>
          <div class="col-2">
            <InputNumber v-model="item.qty"
                         inputId="horizontal-buttons"
                         showButtons
                         buttonLayout="horizontal"
                         :step="1" style="max-width: 100%; box-sizing: border-box;">
              <template #incrementbuttonicon>
                <span class="material-symbols-sharp">
                  add
                </span>
              </template>
              <template #decrementbuttonicon>
                <span class="material-symbols-sharp">
                  remove
                </span>
              </template>
            </InputNumber>
          </div>
          <div class="col-1 d-flex justify-content-end">
            <button type="button"
                    class="btn btn-danger delete-product-btn d-inline-flex
                    justify-content-center align-items-center"
                    @click="deleteFromCart(item.product.id)">
              <span class="material-symbols-sharp">
                close
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="col-3"></section>
  </div>
</template>

<style scoped>

</style>