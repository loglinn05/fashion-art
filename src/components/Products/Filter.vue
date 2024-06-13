<script setup>
import {reactive, watch} from "vue";
import PriceSlider from "./PriceSlider.vue";

const props = defineProps({
  filterList: Object,
  modelValue: Object,
  loading: Boolean,
})

const emit = defineEmits(["filter", "update:modelValue"])

let filterVals = reactive(JSON.parse(JSON.stringify(props.modelValue)))

watch(
    filterVals,
    (value) => {
      emit("update:modelValue", value);
    },
    { deep: true, immediate: true }
)
</script>

<template>
  <section class="col-3">
    <button class="btn btn-warning d-inline-flex justify-content-center align-items-center w-100 mb-3" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapseFilters"
            aria-expanded="false" aria-controls="collapseFilters">
      Filters&nbsp;
      <span class="material-symbols-sharp">
        menu
      </span>
    </button>
    <div class="mb-3">
      <h3 class="fs-3">Type</h3>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="type-1">
        <label class="form-check-label" for="type-1">
          Sunglasses
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="type-2">
        <label class="form-check-label" for="type-2">
          Bracelets
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="type-3">
        <label class="form-check-label" for="type-3">
          Bijouterie
        </label>
      </div>
    </div>
    <div class="mb-3">
      <h3 class="fs-3">Size</h3>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="size-1">
        <label class="form-check-label" for="size-1">
          XXS
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="size-2">
        <label class="form-check-label" for="size-2">
          XS
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="size-3">
        <label class="form-check-label" for="size-3">
          S
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="size-4">
        <label class="form-check-label" for="size-4">
          M
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="size-5">
        <label class="form-check-label" for="size-5">
          L
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="size-6">
        <label class="form-check-label" for="size-6">
          XL
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="size-7">
        <label class="form-check-label" for="size-7">
          XXL
        </label>
      </div>
    </div>
    <div class="mb-3">
      <h3 class="fs-3">Price</h3>
      <PriceSlider
          :listPrice="filterList.price"
          v-model="filterVals.price" />
    </div>

  </section>
</template>