<template>
  <div class="app">
    <Pointer>
      <HeaderComponent />

      <Nuxt />
    </Pointer>
  </div>
</template>

<script>
// components
import HeaderComponent from "@/components/layout/header/index";
import Pointer from "@/components/layout/Pointer";

export default {
  components: {
    HeaderComponent,
    Pointer,
  },
};
</script>
