<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Mousewheel, Pagination, EffectCreative } from "swiper/modules";
import type { CreativeEffectTransform } from "swiper/types";

const api = useApi();

const {
  data: projects,
  status,
  error,
} = useAsyncData(
  "data.projects",
  () => api.get("/data.json").then((res) => res.data.projects)
  // .then((projects) => {
  //   return projects.map(async (project: any) => {
  //     if (!project.logo.startsWith("~")) return project;

  //     const logo = await useAsset(project.logo);
  //     return { ...project, logo };
  //   });
  // })
);

definePageMeta({
  title: "Best web projects",
  meta: [
    {
      name: "description",
      content: `portfolio Mohamed Ibrahim, Professional web developer works, best designs for web site portfolio, سابقة اعمال محمد ابراهيم، اعمال مطور ويب محترف ، افضل التصاميم لبناء المواقع `,
    },
  ],
});
</script>

<template>
  <main class="bg-gray-800 text-white h-dvh sections-container overflow-auto">
    <swiper
      effect="creative"
      :creativeEffect="{
        prev: {
          translate: [0, 0, -800],
        },
        next: {
          translate: [0, '100%', 300],
          rotate: [90, 0, 0],
        },
      }"
      :modules="[Mousewheel, EffectCreative]"
      :mousewheel="true"
    >
      <swiper-slide v-for="proj in projects" :key="proj.name">
        <section
          class="h-dvh relative w-full"
          :style="`
      --color-1: ${proj.color1};
      --color-2: ${proj.color2};
      `"
        >
          <div
            class="absolute z-0 inset-0 flex justify-center items-center bg-gray-800 bg-opacity-90"
          >
            <!-- <img
              :src="proj.logo"
              :aly="proj.name"
              class="block aspect-square object-contain max-w-screen-md w-full max-h-full"
              loading="lazy"
            /> -->
          </div>

          <div class="w-full h-full flex justify-center items-center">
            <div
              class="relative backdrop-blur-sm border-stone-50 bg-opacity-10 px-12 py-6 rounded-3xl shadow-md border bg-stone-800/50 custom_shadow"
            >
              <main class="flex gap-4">
                <div class="relative">
                  <h2 class="text-center text-3xl leading-loose title">
                    {{ proj.name }}

                    <!-- {{ proj.logo }}/ -->
                  </h2>
                  <p
                    v-text="proj.description"
                    class="md:max-w-screen-sm mt-8 leading-loose"
                  />
                  <!-- 
                
                <a
                  target="_blank"
                  v-if="proj.link"
                  :href="proj.link"
                  class="btn"
                  >
                  <span> عرض حي </span>
                </a>
                <span v-else>
                  <fa :icon="['fab', 'buffer']" />
                  البرنامج موجود بالمكان
                </span> -->
                </div>

                <!-- 
                <div>
                  <swiper
                    :slides-per-view="1.5"
                    :space-between="20"
                    :centered-slides="true"
                    :loop="true"
                    :grab-cursor="true"
                    class="mySwiper"
                  >
                    <swiper-slide
                      v-for="(img, index) in proj.images"
                      :key="index"
                      class="card"
                    >
                      <div class="bg-blue-40 p-2 rounded-md">{{ img }}</div>
                    </swiper-slide>
                  </swiper>
                </div>
                  -->
              </main>
            </div>
          </div>
          <!-- 
            <div class="imgs">
              <SwiperComponent :images="proj.images" />
            </div> -->
        </section>
      </swiper-slide>
    </swiper>
    <div class="glow"></div>
  </main>
</template>

<style lang="scss" scoped>
.sections-container {
  background: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );

  * {
    font-family: "Cairo" !important;
  }

  section {
    background: linear-gradient(40deg, var(--color-1), var(--color-2));

    .title {
      font-weight: bold;
      text-shadow: 0px 0 6px #4fbac9;
    }
  }

  .custom_shadow::before {
    content: "";

    @apply w-full h-20 absolute bottom-0 left-0 rounded-3xl blur-3xl opacity-65;
    box-shadow: 0 30px 20px 8px var(--color-1);

    background: var(--color-1);
  }

  .glow {
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 100vw;
    height: 50vh;
    background: #fff;
    filter: blur(80vw);
    z-index: 5;
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    will-change: opacity;
    mix-blend-mode: overlay;
  }
}
</style>
