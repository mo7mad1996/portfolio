<template>
  <div class="profile-page">
    <ProfileInterface path="/profile/personal" />
    <Resume />
    <Custemfooter />
  </div>
</template>

<script>
import ProfileInterface from "~/components/profile/profile_interface";
import Resume from "~/components/profile/resume.vue";
import Custemfooter from "~/components/profile/footer";

export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/data.json");

    return { data };
  },
  components: {
    ProfileInterface,
    Resume,
    Custemfooter,
  },
  head() {
    return {
      title: "Personal profile",
    };
  },
};
</script>

<style scoped lang="scss">
.profile-page {
  background: rgb(32, 153, 223);
}
</style>
