<template>
  <div
    class="pointer"
    :class="{ active, click }"
    :style="`top: ${y}px; left: ${x}px`"
  ></div>
</template>

<script>
export default {
  name: 'Pointer',
  data() {
    return {
      active: false,
      click: false,
      x: 0,
      y: 0,
    }
  },
  mounted() {
    addEventListener('mousemove', (e) => {
      this.active = true
      this.x = e.clientX
      this.y = e.clientY
    })

    addEventListener('pointerup', () => (this.click = false))
    addEventListener('pointerdown', () => (this.click = true))
    addEventListener('touchstart', () => (this.active = false))
  },
}
</script>

<style scoped lang="scss">
.pointer {
  display: none;
  position: fixed;
  z-index: 999;
  width: 20px;
  height: 20px;
  pointer-events: none;

  &::after,
  &::before {
    content: '';
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
}
.active {
  display: block;
}
.click::after {
  clip-path: polygon(0 0, 6px 18px, 10px 10px, 18px 6px);
}
</style>