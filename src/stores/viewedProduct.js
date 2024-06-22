import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useViewedProductStore = defineStore('viewedProduct', () => {
    const viewedProduct = ref({});

    function setViewedProduct(product) {
        viewedProduct.value = product;
    }

    return {
        viewedProduct,
        setViewedProduct
    }
})