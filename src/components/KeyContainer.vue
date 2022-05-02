<style scoped>
.key-div {
  width: 100%;
  display: grid-row;
  gap: 20px;
}

.selected {
  border: solid white 4px;
}

.done {
  visibility: hidden;
}

.default {
  opacity: .2;
}

</style>

<template>
  <div class="key-div">
    <KeyItem 
      v-for="(key, index) in keys" 
      :writeKey="key.key"  
      :key="index"
      :class="key.status"
      />
  </div>
</template>

<script setup>
import KeyItem from "./KeyItem.vue";
import { computed, defineProps } from "vue";
defineProps({
  keys: [Object] | null,
});
</script>
