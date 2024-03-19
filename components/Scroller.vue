<template>
  <div class="scroller"></div>
</template>

<script>
export default {
  name: "Scroller",
};
</script>

<style lang="scss" scoped>
.scroller {
  width: 2px;
  height: 100px;
  position: absolute;
  bottom: 0;
  right: calc(50vw - 1px);
  overflow: hidden;
  animation: scrollerContainer 7s 3s;
  background: transparent;

  &::after {
    height: 30px;
    background: white;
    width: 100%;
    display: block;
    content: "";
    transform: translateY(-30px);
    animation: scroller ease 1s 4s 5;
  }
}
</style>
