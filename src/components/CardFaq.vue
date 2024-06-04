<template>
    <div class="card-container bg-violet-300 ">
        <template v-if="showText">
            <div class="card-container-info  mx-12 lg:mx-28 flex py-8 justify-center items-center gap-6 md:gap-8">
                <button @click="showText = !showText">
                    <img src="../../public/img/down-dark-arrow.png" alt="arrow" />
                </button>
                <p class="text-sm md:text-xl">
                    {{ title }}
                </p>
            </div>
        </template>
        <template v-else>
            <div class="card-container-info  mx-12 lg:mx-28 flex py-8 justify-center items-center gap-4 md:gap-6">
                <button @click="showText = !showText">
                    <img src="../../public/img/up-dark-arrow.png" alt="arrow" />
                </button>
                <div class="container-text flex-col py-8  justify-center ">
                    <p class="text-sm md:text-xl pb-2 md:pb-6">
                        {{ title }}
                    </p>
                    <p class="text-sm text-neutral-500 md:text-xl">{{ description }}</p>
                </div>
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    title: { type: String },
    description: { type: String }
})
const showText = ref(true)
</script>