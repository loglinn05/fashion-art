import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);

    function addToCart(product) {
        if (findItemInCart(product.id) < 0) {
            cart.value.push({
                "product": product,
                "qty": 1
            });
        }
    }

    function deleteFromCart(itemId) {
        cart.value.splice(
            findItemInCart(itemId), 1
        );
    }

    function findItemInCart(id) {
        return cart.value.findIndex(
            (item) => item.product.id == id
        );
    }

    function changeQty(id, op = "inc") {
        if (op == "inc") {
            cart[findItemInCart(id)].qty += 1
        } else if (op == "dec") {
            if (cart[findItemInCart(id)].qty > 1)
                cart[findItemInCart(id)].qty -= 1
        } else {
            throw new Error(`Invalid operator: expected "inc" or "dec", found "${op}".`);
        }
    }

    function validateQty(id) {
        let qty = cart[findItemInCart(id)].qty;
        if (
            !Number.isInteger(qty) ||
            qty <= 0
        ) {
            cart[findItemInCart(id)].qty = 1;
        }
    }

    const total = computed(() => {
        return cart.reduce(
            (acc, curVal) => {
                return acc + (curVal.product.price * curVal.qty);
            }, 0
        );
    })

    return {
        cart,
        addToCart,
        deleteFromCart,
        findItemInCart,
        changeQty,
        validateQty,
        total
    }
}, {
    persist: {
        storage: localStorage,
        paths: ['cart']
    }
})