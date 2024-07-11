<template>
  <template v-if="showText">
    <div class="container flex flex-col items-center gap-4 md:gap-6">
      <img :src="image" :alt="alt" />
      <p class="text-lg text-white lg:text-xl">
        {{ title }}
      </p>
      <button @click="showText = !showText">
        <img :src="downArrowImage" alt="arrow" />
      </button>
    </div>
  </template>
  <template v-else>
    <div class="container flex flex-col items-center gap-4 md:gap-6">
      <button @click="showText = !showText">
        <img :src="upArrowImage" alt="arrow" />
      </button>
      <p class="mb-6 text-white text-center font-bold">{{ description }}</p>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  title: { type: String },
  image: { type: String },
  downArrowImage: { type: String },
  upArrowImage: {type:String},
  alt:{type:String},
  description:{type:String}
})

const showText = ref(true)

</script>