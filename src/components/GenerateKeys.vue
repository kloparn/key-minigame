<style>
.key-div {
  width: 100%;
  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

<template>
  <div class="key-div">
    <RandomKeyButton v-for:="(_, index) in amount" />
  </div>
</template>

<script setup>
import RandomKeyButton from "./RandomKeyButton.vue";
import { computed, defineProps } from "vue";
const props = defineProps({
  amount: Number | null,
});

const amountOfKeys = computed(() => props.amount);
</script>
