<script setup lang="ts">
import { useSwiperSlide } from "swiper/vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const props = defineProps<{
  project: {
    logo: string;
    images: string[];
    name: string;
    description: string;
    link: string;
    color1: string;
    color2: string;
  };
  append?: string;
}>();
const emit = defineEmits(["update"]);
const swiperSlide = useSwiperSlide();

// Reactive references for assets
const logo = ref<string>("");
const images = ref<string[]>([]);
const slide = ref<number | null>(null);

// Load assets on mount
onMounted(async () => {
  logo.value = await useAsset(props.project.logo);
  images.value = await Promise.all(
    props.project.images.map((img: string) =>
      useAsset(`~/assets/imgs/projects${img}`)
    )
  );
});

watch(
  swiperSlide,
  (v) => {
    if (!v?.isActive) return;
    emit("update", props.project.color1, props.project.color2);
  },
  { deep: true, immediate: true }
);
</script>
<template>
  <div
    class="h-dvh w-dvw flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <section
      class="relative rounded-lg overflow-hidden shadow border transition-transform border-transparent max-w-screen-md w-full h-fit p-0"
      :class="{ 'scale-0': !swiperSlide.isActive }"
    >
      <div
        class="bg-slate-900/90 relative z-1 w-full p-2 grid gap-2 md:grid-cols-2 rounded-sm shadow-sm"
      >
        <div class="col-span-1 text-white p-2 px-6 cairo text relative">
          <!-- Logo -->
          <img
            v-if="logo"
            :src="logo"
            :alt="`${project.name} logo`"
            class="absolute top-0 left-0 opacity-10 z-0 w-full h-full object-contain p-2"
          />
          <h2
            class="text-3xl font-semibold p-2 text-center flex gap-4 items-center"
          >
            <img
              v-if="logo"
              :src="logo"
              :alt="`${project.name} logo`"
              class="h-12 block"
            />
            <span>
              {{ project.name }}
            </span>
          </h2>
          <p
            class="opacity-60 text-center leading-relaxed p-2 my-3 line-clamp-7"
          >
            {{ project.description }}
          </p>

          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            class="btn mx-auto"
          >
            <span> عرض - SHOW </span>
          </a>
        </div>

        <!-- Image Gallery -->
        <div class="col-span-1">
          <div class="relative w-full h-full flex items-center">
            <Swiper
              :slides-per-view="1.4"
              :centered-slides="true"
              :loop="true"
              :pagination="{
                clickable: true,
              }"
              class="swiper-container h-full"
              :modules="[Autoplay, Pagination, Navigation]"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :navigation="true"
            >
              <SwiperSlide v-for="(image, index) in images" :key="index">
                <div
                  class="h-full grid place-content-center hover:bg-black/10 p-1"
                  @click="slide = index"
                >
                  <img
                    :src="image"
                    :alt="`${project.name} screenshot ${index + 1}`"
                    class="aspect-video w-full object-cover block object-top"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="#teleports">
      <transition>
        <div
          v-if="slide != null"
          class="fixed top-0 left-0 w-dvw h-dvh backdrop-blur-3xl z-[40000] flex flex-col"
        >
          <div class="flex justify-end p-2" @click="slide = null">
            <button
              class="text-white grid place-content-center p-3 hover:!text-red-400"
            >
              <fa icon="fa-solid fa-xmark" class="font-bold text-3xl" />
            </button>
          </div>
          <div class="flex rounded-t-xl shadow p-2 gap-2 flex-1">
            <button
              @click="slide++"
              class="grid place-content-center p-5 text-white text-3xl hover:text-sky-400"
            >
              <fa icon="fa-solid fa-chevron-left" />
            </button>
            <div class="flex-1">
              <img
                :alt="images[slide % images.length]"
                :src="images[slide % images.length]"
                class="w-full max-h-full object-contain shadow translate-y-0 transition-all"
              />
            </div>
            <button
              @click="slide--"
              class="grid place-content-center p-5 text-white text-3xl hover:text-sky-400"
            >
              <fa icon="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  @apply transition-all;
}

.v-enter-from,
.v-leave-to {
  @apply backdrop-blur-0;

  img {
    @apply translate-y-full;
  }
}
</style>
