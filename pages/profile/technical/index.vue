<template>
  <div class="profile-page">
    <ProfileInterface path="/profile/technical" />

    <section>
      <h1></h1>
      <table>
        <tr v-for="(v, p) in data" :key="p">
          <td>{{ p }}</td>

          <td>: {{ v }}</td>
        </tr>
      </table>
    </section>
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
      title: 'Technical profile',
    }
  },
}
</script>

<style scoped lang="scss">
.profile-page {
  background: rgb(32, 153, 223);
}
</style>
