<script setup lang="ts">
const props = defineProps(["skills"]);
const off = ref(false);

const effect = () => {
  setTimeout(() => {
    off.value = !off.value;
    effect();
  }, Math.max(Math.random() * 1000, 100));
};

onMounted(() => {
  effect();
});

// methods
const mouseMove = (e: any) => {
  const target: HTMLElement = e.currentTarget;

  if (!target) return;
  const rect = target.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

const parent_mousemove = (e: any) => {
  const { currentTarget: target } = e;

  for (const skill of target.querySelectorAll(".skill")) {
    const rect = skill.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    skill.style.setProperty("--mouse-x", `${x}px`);
    skill.style.setProperty("--mouse-y", `${y}px`);
  }
};
</script>

<template>
  <div class="skills" @mousemove="parent_mousemove">
    <div class="container">
      <h2 class="title" :class="{ off }">Skills</h2>
      <div
        :class="!off && `shadow-[0px_0px_300px_40px_rgb(220,187,197)]`"
      ></div>
    </div>

    <div class="container">
      <div class="grid md:grid-cols-4 max-md:grid-cols-2 gap-1.5">
        <a
          @mousemove="mouseMove"
          v-for="skill in skills"
          :href="skill.URL"
          target="_blank"
          class="skill"
          :key="skill.name"
        >
          <div class="border"></div>
          <div class="content">
            <img
              :src="skill.image"
              :alt="skill.name"
              class="img"
              loading="lazy"
            />

            <div
              class="flex p-2 gap-2 flex-col h-full justify-end relative z-10"
            >
              <h3 class="cairo opacity-100 !font-bold text-violet-400">
                {{ skill.name }}
              </h3>
              <div class="bg-gray-600 p-px rounded-3xl">
                <span
                  class="h-1 bg-violet-300 block rounded-3xl"
                  :style="`width: ${skill.degree * 10}%`"
                ></span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="shadow-[0px_0px_300px_40px_rgb(220,187,197)]"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.off {
  -webkit-text-stroke: 0.5px #328181 !important;
  text-shadow: none !important;
}
.skills {
  @apply mb-12 px-0 py-4;

  .skill {
    @apply block relative rounded-lg bg-black/10 h-52;

    .border,
    &::before {
      content: "";
      @apply rounded-lg h-full w-full pointer-events-none absolute top-0 left-0 opacity-0 transition-opacity;
    }

    .border {
      background-image: radial-gradient(
        500px circle at var(--mouse-x) var(--mouse-y),
        #fff,
        transparent 40%
      );

      border: none;
      z-index: 1;
    }

    &::before {
      background-image: radial-gradient(
        100px circle at var(--mouse-x) var(--mouse-y),
        rgba($color: #fff, $alpha: 0.7),
        transparent,
        transparent
      );
      @apply blur-3xl;
      z-index: 3;
    }
    &:hover::before {
      opacity: 1;
    }
    .content {
      height: calc(100% - 2px);
      position: relative;
      width: calc(100% - 2px);
      background-color: rgba($color: #483b5d, $alpha: 0.95);
      border-radius: inherit;
      margin: 1px;
      overflow: hidden;
      z-index: 2;

      .img {
        width: 80%;
        height: 80%;
        object-fit: contain;
        display: grid;
        align-items: center;
        font-size: 4em;
        opacity: 0.7;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        filter: drop-shadow(0 0 1px #b29ad9);
        text-align: center;
        position: absolute;

        @media (max-width: 626px) {
          padding: 30px;
        }
      }
    }
  }
  // &:hover > .skill::before {
  &:hover .border {
    opacity: 1 !important;
  }
}
</style>
