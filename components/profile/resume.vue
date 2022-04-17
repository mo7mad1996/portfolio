<template>
  <div class="resume container">
    <a href="/download/Mohammed-Ibrahim.pdf" download @pointermove="move">

      <div class="background">
        <div
          class="pointer"
          :style="`top: ${y}px;left: ${x}px`"
        ></div>
      </div>

      <div class="txt">
        <span>
          <fa icon="download" />
          resume
        </span>
      </div>

    </a>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data: () => ({ x: -100, y: 0 }),
  methods: {
    move(e) {
      this.x = e.layerX
      this.y = e.layerY
    },
  },
}
</script>

<style lang="scss" scoped>
$frist-color: black;
$secound-color: #5fffe1;

.resume {
  z-index: 7;
  position: sticky;
  top: 10px;
  bottom: 10px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  pointer-events: none;

  a {
    padding: 10px 30px;
    border-radius: 40px;
    position: relative;
    overflow: hidden;
    border: 1px solid $frist-color;
    pointer-events: all;

    .txt {
      position: relative;
      z-index: 2;
      pointer-events: none;
    }

    .background {
      position: absolute;
      inset: -7px -9px;
      border: 10px solid $frist-color;
      background: $secound-color;
      z-index: 1;

      .pointer {
        position: absolute;
        background: $frist-color;
        height: 14px;
        width: 14px;
        transform: translate(-50%, -50%);
        display: block;
      }
    }

    .background {
      filter: blur(10px) contrast(20);
    }
  }
}
</style>
