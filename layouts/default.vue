<template>
  <div class="app">
    <HeaderComponent />

    <Nuxt />
  </div>
</template>

<script>
// components
import HeaderComponent from '@/components/layout/header/index'

export default {
  created() {
    console.log(
      '%c This site UI form  %c  https://kuon.space %c Created By Mohammed Ibrahem ♥ %c',
      'background-image: linear-gradient(90deg, #35495e, #c4a5da ) ;font-size: 2em; color: #dc080d; border-radius: 15px 0 0 15px;',
      'background: #c4a5da;font-size: 2em; color: #333; border-radius: 0 0 0 0;',
      'background-image: linear-gradient(90deg, #c4a5da, #4e74fd ) ;font-size: 2em; color: #f00; border-radius: 0 15px 15px 0;',
      'background:transparent'
    )
  },
  components: {
    HeaderComponent,
  },
}
</script>
