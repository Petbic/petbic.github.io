<template>
    <div class="flex justify-center">
        <div v-for="n in 5" class="text-white mt-6 px-2 md:mt-12 md:mx-6 md:my-6">
            <p class="mb-4 md:mb-8 font-bold text-sm md:text-xl">{{ title }}</p>
            <div v-for="n in 5" class="mb-3">
                <span class="text-[10px] md:text-lg">{{ link }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String },
    link: { type: String }
})

</script>