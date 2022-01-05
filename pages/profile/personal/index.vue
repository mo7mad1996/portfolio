<template>
  <div class="profile-page">
    <ProfileInterface path="/profile/personal" />
  </div>
</template>

<script>
import ProfileInterface from '~/components/profile/profile_interface'

export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/data.json')
    return { data }
  },
  components: {
    ProfileInterface,
  },
  head() {
    return {
      title: 'Personal profile',
    }
  },
}
</script>

<style scoped lang="scss">
.profile-page {
  background: rgb(32, 153, 223);
}
</style>
