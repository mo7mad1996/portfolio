<template>
  <section
    id="home"
    class="overflow-visible p-0 flex h-dvh max-md:flex-col-reverse"
    :class="{ active: $route.query.section == 'home' }"
  >
    <div class="flex-1 relative text" @animationend="animationend">
      <div class="overflow-hidden">
        <h1 class="max-md:!text-2xl max-md:!p-2">
          Mohamed <br />
          Ibrahim
        </h1>

        <p class="max-md:!text-lg">
          web developer / <br />
          full stack web developer.
        </p>
      </div>
    </div>

    <div class="flex-1 relative pointer-events-none select-none">
      <img
        :style="`transform: translate(${mouse.x / 20}px, ${mouse.y / 20}px)`"
        src="~/assets/imgs/land/cloud2.svg"
        class="absolute cloud top-1/4 right-10 max-md:hidden"
        alt="cloud"
      />

      <div
        :style="`transform: translate(${-mouse.x / 50}px, ${-mouse.y / 50}px)`"
        class="h-full relative w-full"
      >
        <img
          alt="moon"
          class="max-h-full block h-1/3 top-1/2 image absolute right-1/2 translate-x-1/3 -translate-y-1/2 max-md:h-full"
          src="~/assets/imgs/land/moon.svg"
        />
      </div>
      <img
        :style="`transform: translate(${mouse.x / 20}px, ${mouse.y / 20}px)`"
        src="~/assets/imgs/land/cloud2.svg"
        class="absolute cloud right-28 bottom-1/4 max-md:hidden"
        alt="cloud"
      />
      <img
        src="~/assets/imgs/land/cloud1.svg"
        alt="cloud"
        class="absolute cloud bottom-1/4 -left-28 fromBottom max-md:hidden"
        :style="`transform: translate(${mouse.x / -12}px, ${mouse.y / 12}px)`"
      />

      <span
        class="absolute top-1/2 left-0 text-rose-500 font-bold tracking-[1.5px] text-xl uppercase"
      >
        portfolio
      </span>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["mouse"]);
const emit = defineEmits(["animation"]);
const animationend = () => emit("animation");
</script>

<style lang="scss" scoped>
.active {
  .image {
    animation: fromRight 1.4s ease;
  }
  .cloud {
    animation: fromRight 1s ease;
  }

  .fromBottom {
    animation: fromBottom 1s ease;
  }
}
</style>
