<style scoped>
.button-border {
  width: 5rem;
  background-color: blue;
  color: white;
  border-radius: 10px;
  padding: 1rem 10px 1rem 10px;
  display: inline-block;
  margin: 10px;
}
</style>

<template>
  <div class="button-border">
    <p style="text-shadow: 1px 1px 0px black;">{{ writeKey }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  writeKey: String,
});
</script>