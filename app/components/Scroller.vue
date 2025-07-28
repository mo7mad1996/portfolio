<script setup lang="ts">
const active = ref(false);

// methods
const scroll = () => {
  clearInterval(interval.value);
  active.value = false;
};
const interval: any = ref("");

onMounted(() => {
  document.addEventListener("scroll", scroll);
  active.value = true;

  interval.value = setInterval(() => {
    active.value = true;

    setTimeout(() => (active.value = false), 3000);
  }, 5000);
});
onBeforeUnmount(() => {
  document.removeEventListener("scroll", scroll);
});
</script>

<template>
  <div class="fixed bottom-0 w-full">
    <div class="scroller bg-gray-200/20" v-if="active"></div>
  </div>
</template>

<style lang="scss" scoped>
.scroller {
  width: 2px;
  height: 100px;
  margin: auto;
  overflow: hidden;

  &::after {
    content: "";
    height: 30px;
    background: white;
    width: 100%;
    display: block;
    transform: translateY(-40px);
    animation: scroller ease 1s infinite;
  }
}
</style>
