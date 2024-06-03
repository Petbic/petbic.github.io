<template>
    <article :class="classes">
        <p class="absolute my-5 ml-4 md:my-10 md:ml-8 text-2xl md:text-3xl">{{ title}}</p>
        <p class="absolute mt-12 ml-4 md:mt-20 md:ml-8 text-2xl md:text-3xl">{{ secondTitle }}</p>
            <div
                class="flex flex-col justify-center h-auto w-auto sm:w-full sm:h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-md bg-indigo-800/60 group-hover:opacity-100">
                <h2 class="text-sm md:text-xl md:mt-4 font-semibold text-white">
                    {{ infoText }}
                </h2>
            </div>
    </article>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props=defineProps({
    title: { type: String },
    secondTitle: { type: String },
    infoText: { type: String },
    image: {type: String}
})

const classes = computed(() => {
    return [`bg-[url('${props.image}')]`,'overflow-hidden','bg-cover','bg-no-repeat','rounded-2xl','cursor-pointer','h-45','w-[24rem]', 'sm:h-60','sm:w-[30rem]','md:h-96','group','md:w-[42rem]']
})
</script>