<template>
  <LayoutPointer>
    <template v-slot="{ mouse }">
      <LayoutHeader />

      <NuxtPage :mouse="mouse" />
    </template>
  </LayoutPointer>
</template>
