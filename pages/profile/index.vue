<template>
  <div class="profile-page">
    <ProfileInterface :path="require('~/assets/imgs/profile/technical.png')" />
    <Resume />
    <Info :info="info" :data="data" />
    <ProfileSkills :skills="data.t_skills" />
    <CustomFooter />
  </div>
</template>

<script>
import ProfileInterface from "~/components/profile/profile_interface";
import Info from "~/components/profile/info";
import ProfileSkills from "~/components/profile/skills";
import Resume from "~/components/profile/resume";
import CustomFooter from "~/components/profile/footer";

export default {
  async asyncData({ $axios, req }) {
    const res = await $axios.get("/data.json");

    let born = await new Date(res.data["Date of Birth"]).getFullYear(),
      naw = new Date().getFullYear();
    let Age = naw - born + " Years",
      Experience = naw - res.data["Start learn"] + " Years";

    const data = await Object.assign(res.data, {
      Age,
      Experience: Experience,
    });
    return { data };
  },

  data: () => ({
    info: [
      "Name",
      "Age",
      "University degree",
      "Mobile num",
      "Total Experience",
    ],
    data: {
      t_skills: [],
      p_skills: [],
    },
  }),
  components: {
    ProfileInterface,
    Info,
    ProfileSkills,
    Resume,
    CustomFooter,
  },
  head() {
    return {
      title: "Technical profile",
    };
  },
};
</script>

<style scoped lang="scss">
.profile-page {
  background: rgb(32, 153, 223);
  color: #0f1816;
}
</style>
