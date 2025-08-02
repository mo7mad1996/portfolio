<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Mousewheel, EffectCreative } from "swiper/modules";

const props = defineProps(["mouse"]);

const color1 = ref("#072142");
const color2 = ref("#020b16");
const scroller = ref(true);

const api = useApi();
const canvasRef = ref<HTMLCanvasElement | null>(null);

watch(canvasRef, (v) => {
  if (v) useCanvas(v);
});

const {
  data: projects,
  status,
  error,
} = useAsyncData("data.projects", () =>
  api.get("/data.json").then((res) => res.data.projects)
);

const update = (c1: string, c2: string, l: string) => {
  color1.value = c1;
  color2.value = c2;
};

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
  <main class="text-white h-dvh w-dvw sections-container overflow-auto">
    <div class="glow fixed top-0 w-full" :style="`--color: ${color1}`"></div>
    <ClientOnly>
      <canvas
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-dvw h-dvh z-0 object-cover"
        ref="canvasRef"
      ></canvas>
    </ClientOnly>
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
      @slideChange="scroller = false"
      :modules="[Mousewheel, EffectCreative]"
      :mousewheel="true"
    >
      <swiper-slide v-for="proj in projects" :key="proj.name">
        <Project @update="update" :project="proj"></Project>
      </swiper-slide>
    </swiper>

    <div class="glow fixed bottom-0 w-full" :style="`--color: ${color2}`"></div>
    <Scroller v-if="scroller" class="z-50" />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-image: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );

  .glow {
    box-shadow: 0 0 300px 40px var(--color);
  }
}
</style>
