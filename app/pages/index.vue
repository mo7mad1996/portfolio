<script setup lang="ts">
import { gsap } from "gsap";

// setup
const route = useRoute();
const router = useRouter();

// data
const links = ["home", "works", "about", "contact"];
const props = defineProps(["mouse"]);

const mouse = props.mouse;
const touch = reactive({
  start: 0,
  end: 0,
});
const is_in_animation = ref(false);
const showScroller = ref(true);
const contentRef = ref<HTMLElement | null>(null); // HTML Ref
const canScroll = ref(false);
const target_id = computed(() => links[section.value] || "");
const section = ref(Math.max(0, links.indexOf(route.query.section as string)));

// methods

function scroll(e: WheelEvent) {
  if (e.deltaY > 0) scroll_down();
  else if (e.deltaY < 0) scroll_up();
}

function touchstart(e: TouchEvent) {
  const [t] = e.touches;
  if (!t) return;
  touch.start = t.clientY;
}

function touchend(e: TouchEvent) {
  const [end] = e.changedTouches;
  if (end) touch.end = end.pageY;

  if (touch.end - touch.start > 0) scroll_up();
  else if (touch.end - touch.start < 0) scroll_down();
}

function scroll_down() {
  showScroller.value = false;
  if (is_in_animation.value) return;

  if (section.value < links.length - 1) {
    section.value += 1;
    is_in_animation.value = true;
  }
}
function scroll_up() {
  showScroller.value = false;

  if (is_in_animation.value) return;

  if (section.value) {
    is_in_animation.value = true;
    section.value -= 1;
  } else {
    is_in_animation.value = true; // to stop many times reload
    window.location.reload();
  }
}
function animationend() {
  is_in_animation.value = false;
}

function startScroll() {
  if (!import.meta.client || !contentRef.value) return;
  const target_section = document.getElementById(target_id.value);
  if (!target_section) return;
  const scroll_to = target_section.offsetTop;

  gsap.to(contentRef.value, {
    scrollTop: scroll_to,
    duration: 0.5,
    ease: "expoScale(0.5,7,none)",
  });
}

function changeQuery() {
  const currentQuery = route.query.section as string;
  const newQuery = links[section.value];

  if (currentQuery == newQuery) return;
  router.replace({
    query: {
      section: links[section.value],
    },
  });
}

onMounted(() => {
  canScroll.value = true;
  startScroll();
});

watch(
  section,
  (v) => {
    changeQuery();
    startScroll();
  },
  { immediate: true }
);
watch(
  () => route.query.section,
  (v) => {
    if (!v || Array.isArray(v)) return;

    section.value = links.indexOf(v);
  },
  { immediate: true }
);

definePageMeta({
  title: "Home",
});
</script>

<template>
  <div
    class="portfolio"
    @touchstart="touchstart"
    @touchend="touchend"
    @wheel="scroll"
  >
    <div
      class="h-full absolute w-full pointer-events-none"
      :style="`transform: translate(${-mouse.x / 50}px, ${-mouse.y / 50}px)`"
    >
      <img
        src="~/assets/imgs/background/moonlight.svg"
        class="w-1/2 absolute right-0 h-dvh max-md:w-full max-md:-top-11"
        alt="moonlight"
      />
    </div>
    <div
      class="bg pointer-events-none"
      :style="`transform: translate(${mouse.x / 100}px, ${mouse.y / 100}px)`"
    >
      <div
        class="moonlight"
        :style="`transform: translate(${-mouse.x / 50}px, ${-mouse.y / 50}px)`"
      ></div>
    </div>
    <!-- start content -->
    <div class="content">
      <layoutAside />

      <main ref="contentRef" :class="{ 'overflow-auto': canScroll }">
        <LandHome :mouse="mouse" @animation="animationend" />
        <LandWorks @animation="animationend" />
        <LandAbout @animation="animationend" />
        <LandContact @animation="animationend" />
      </main>
    </div>
  </div>

  <Scroller v-if="showScroller" />
</template>

<style lang="scss" scoped>
.portfolio {
  color: white;
  width: 100dvw;
  height: 100dvh;
  overscroll-behavior: contain;
  background-image: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );

  .bg {
    height: 100dvh;
    top: 0;
    right: 0;
    position: fixed;
    background: url(~/assets/imgs/background/star.svg);
    pointer-events: none;
    background-size: 60%;
    width: 100%;

    @media (max-width: 578px) {
      right: 50%;
      transform: translateX(25%);
      width: 100%;
    }

    img {
      right: -20vw;
      position: fixed;
      top: -20vw;
      height: 90vw;

      // @media (max-width: 578px) {
      //   height: 100vw;
      //   max-width: 100dvh;
      //   width: 100vw;
      //   right: 50%;
      // }

      &.stars {
        height: 100dvh;
        width: 100vw;
        max-width: none;
        opacity: 1;
        top: 0;
        right: 0;
        object-fit: cover;
        opacity: 0.5;
        transform-origin: center;

        img {
          max-width: none;
        }
      }
    }
  }

  .content {
    display: flex;
    height: 100%;

    main {
      flex: 1;
      overscroll-behavior: contain;
      // scroll-behavior: smooth;
    }
  }
}
</style>
