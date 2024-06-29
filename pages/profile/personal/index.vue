<template>
  <div class="profile-page">
    <ProfileInterface :path="require('~/assets/imgs/profile/personal.png')" />
    <Resume />
    <CustemFooter />
  </div>
</template>

<script>
import ProfileInterface from "~/components/profile/profile_interface";
import Resume from "~/components/profile/resume.vue";
import CustemFooter from "~/components/profile/footer";

export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/data.json");

    return { data };
  },
  components: {
    ProfileInterface,
    Resume,
    CustemFooter,
  },
  head() {
    return {
      title: "profile : about me",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `
        السيره الذاتيه، محمد ابراهيم مطور برمجيات محترف مصري، بكالريوس علوم الحاسب، خبره كبيره بمجال تصميم وتطوير المواقع الالكتونيه
        This is my personal profile page. I'm  a full stack developer who has been working as a frontend engineer for several years and currently focuses, This is the profile page of developer`,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.profile-page {
  background: #051c29;
  height: 100dvh;
  overflow: auto;
}
</style>
