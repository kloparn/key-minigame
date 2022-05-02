<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

/* hide arrows
 Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

.input-field {
  margin-top: 15%;
  font-size: 2rem;
  text-align: center;
  border: black;
  -webkit-appearance: none;
}

button {
  margin: 20px;
  padding: 10px 10px;
  font-size: 2rem;
  background-color: transparent;
  color: white;
  border-color: black;
  border-radius: 10%;
}
button:hover {
  color: red;
  cursor: pointer;
}

.active {
  visibility: hidden;
}
</style>

<template>
  <div>
    
    <input
      class="input-field"
      type="number"
      v-model="keyAmount"
      placeholder="amount of keys"
      @input="onInput"
    />
    <button @click="randomizeKeys">Randomize keys</button>
    <KeyContainer :keys="keys" />
    <button 
      v-if="keys.length > 1"
      @click="startGame" 
      :class="{ active: activeGame }"
    >
      Go
    </button>
  </div>
</template>

<script setup>
import KeyContainer from "./components/KeyContainer.vue";
import { computed, ref } from "vue";
const keys = ref([]);
let keyAmount = ref(null);
let timer = ref(null); // TODO: enable a custom timer for tougher/easier roundes. 
let activeGame = ref(false);

const possibleKeys = ["A", "S", "D", "E", "W", "Q"];

const onInput = () => {
  if (keyAmount.value > 9) keyAmount.value = 9;
  randomizeKeys();
};

const randomizeKeys = () => {
  const keyDiv = [];
  for (let i = 0; i < keyAmount.value; i++) {
    const keyObject = {
      status: "",
    };
    keyObject.key =
      possibleKeys[Math.floor(Math.random() * (possibleKeys.length - 1))];
    keyDiv.push(keyObject);
  }
  keys.value = keyDiv;
};

const startGame = () => {
  // indicate where the player should look and what key to look for.
  let currentKeyIndex;

  const initState = () => {
    keys.value.forEach((key) => (key.status = "default"));
    keys.value[0].status = "selected";
    activeGame.value = true;
    currentKeyIndex = 0;
  };

  const nextKey = () => {
    keys.value[currentKeyIndex].status = "done";
    if (currentKeyIndex + 1 > keys.value.length - 1) {
      document.removeEventListener("keypress", handleKeyPress);
      wonGame();
      clearTimeout(timeout);
      resetGame();
      return;
    }
    currentKeyIndex = currentKeyIndex + 1;
    keys.value[currentKeyIndex].status = "selected";
  }

  const handleKeyPress = ({ key }) => {
    if (key !== keys.value[currentKeyIndex].key.toLowerCase()) return initState();
    nextKey();
  };

  initState();

  document.addEventListener("keypress", handleKeyPress);


  const timeout = setTimeout(() => {
    document.removeEventListener("keypress", handleKeyPress);
    resetGame();
  }, timer.value || 5000);
};

const wonGame = () => {
  // Creating the alert inside a promise to avoid locking the window!
  new Promise((res) => res()).then(() => alert("you won!"))
}

const resetGame = (eventId) => {
  keyAmount.value = null;
  activeGame.value = false;
  keys.value = [];
};
</script>

