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

    let born = new Date(res.data["Date of Birth"]).getFullYear(),
      naw = new Date().getFullYear(); // this year

    let Age = naw - born + " Years Old";
    let Experience = naw - res.data["Start learn"] + " Years";

    const data = Object.assign(res.data, {
      Age,
      "Total Experience": Experience,
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
      title: "Profile",
    };
  },
};
</script>

<style lang="scss">
.profile-page {
  background: #103f5a;
  color: #7bb6a9;
  overflow: auto;
  height: 100dvh;

  h2.title {
    color: transparent;
    -webkit-text-stroke: 0.5px #68e9e9;
    font-family: sans-serif;
    text-shadow: 0 0 12px #60b5b5, 0 0 22px #b4ecec;
    font-weight: bold;
    margin: 0.3em 0;
    font-size: 5em;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    @media (max-width: 720px) {
      font-size: 2em;
    }
  }
}
</style>
