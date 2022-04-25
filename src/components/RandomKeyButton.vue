<style scoped>
.button-border {
  width: 5rem;
  background-color: blue;
  color: white;
  border-radius: 10px;
  padding: 1rem 10px 1rem 10px;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
</style>

<template>
  <div class="button-border">
    <p>{{ randomKey() }}</p>
  </div>
</template>

<script setup>
const possibleKeys = ["A", "S", "D", "E", "W", "Q"];

const randomKey = () =>
  possibleKeys[Math.floor(Math.random() * (possibleKeys.length - 1))];
</script>