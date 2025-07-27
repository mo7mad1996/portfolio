<script setup lang="ts">
const mouse = reactive({
  active: false,
  click: false,
  opacity: true,
  x: 0,
  y: 0,
});

// methods
function mousemove(e: MouseEvent) {
  mouse.opacity = true;
  mouse.active = true;
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}
function pointerup() {
  mouse.click = false;
}
function pointerdown() {
  mouse.click = true;
}
function touchstart() {
  mouse.active = false;
  mouse.opacity = false;
}
</script>

<template>
  <div
    class="pointer_area"
    @mousemove="mousemove"
    @pointerup="pointerup"
    @pointerdown="pointerdown"
    @touchstart="touchstart"
  >
    <div class="app min-h-dvh">
      <slot />
    </div>

    <div
      class="pointer"
      :class="mouse"
      :style="`top: ${mouse.y}px; left: ${mouse.x}px`"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.pointer_area {
  // inset: 0;
  // z-index: 999;

  .app {
    position: relative;
    z-index: 1;
  }

  .pointer {
    position: fixed;
    display: none;
    width: 20px;
    z-index: 999;
    height: 20px;
    opacity: 0;
    pointer-events: none;

    @media (max-width: 720px) {
      opacity: 0 !important;
    }

    &::after,
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background: linear-gradient(-30deg, #f6f1f1, #fa3a00);
      background: #ff4d5a;
      clip-path: polygon(0 0, 8px 18px, 10px 10px, 18px 8px);
      filter: contrast(200);
      transition: all 0.2s;
    }
    &::before {
      background: black;
      transform-origin: 3px 3px;
      transform: scale(1.2);
    }

    &.active {
      display: block;
    }
    &.click::after {
      clip-path: polygon(0 0, 6px 18px, 10px 10px, 18px 6px);
    }
  }
}
</style>
