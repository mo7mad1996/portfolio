<template>
  <div class="email">
    <h3>Send an email</h3>
    <form @submit.prevent="submit">
      <label for="to">to:</label>
      <input
        type="email"
        id="to"
        v-model="to"
        autofocus
        required
        placeholder="mail@example.com"
      />

      <button :disabled="loading" :class="{ loading }">
        <fa :icon="['fas', 'paper-plane']" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Email",
  data() {
    return { to: "", loading: false };
  },
  methods: {
    submit() {
      this.loading = true;

      this.$axios.post("/api/send_mail", { emails: [this.to] }).then((data) => {
        console.log({ data });
        this.loading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.email {
  background: linear-gradient(#54b8d6, #bda1ff);
  padding: 220px;
  position: relative;
  margin-bottom: 120px;

  &::after {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    content: "";
    background: #bda1ff;
    height: 120px;
    display: block;
    clip-path: polygon(
      100% 0%,
      0% 0%,
      0% 54.17%,
      2% 54.14%,
      4% 54.06%,
      6% 53.93%,
      8% 53.74%,
      10% 53.5%,
      12% 53.22%,
      14% 52.88%,
      16% 52.49%,
      18% 52.05%,
      20% 51.57%,
      22% 51.04%,
      24% 50.47%,
      26% 49.86%,
      28% 49.21%,
      30% 48.52%,
      32% 47.8%,
      34% 47.04%,
      36% 46.25%,
      38% 45.44%,
      40% 44.6%,
      42% 43.73%,
      44% 42.85%,
      46% 41.95%,
      48% 41.03%,
      50% 40.11%,
      52% 39.17%,
      54% 38.23%,
      56% 37.29%,
      58% 36.35%,
      60% 35.41%,
      62% 34.48%,
      64% 33.56%,
      66% 32.65%,
      68% 31.76%,
      70% 30.88%,
      72% 30.03%,
      74% 29.2%,
      76% 28.39%,
      78% 27.62%,
      80% 26.88%,
      82% 26.17%,
      84% 25.49%,
      86% 24.86%,
      88% 24.27%,
      90% 23.72%,
      92% 23.21%,
      94% 22.75%,
      96% 22.33%,
      98% 21.97%,
      100% 21.65%
    );
  }

  h3 {
    color: #333;
    text-align: center;
    margin: 2em auto;
    font-family: "Futura LT", sans-serif;
    font-weight: normal;
  }

  form {
    margin: auto;
    display: flex;
    width: fit-content;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px,
      inset rgba(255, 255, 255, 0.3) 0 10px 10px;

    padding: 20px 40px;
    gap: 20px;
    background: #fff3;
    border-radius: 100px;
    align-items: center;

    label {
      color: #333;
      font-size: 20px;
      text-transform: capitalize;
    }

    input {
      background: none;
      outline: none;
      border: none;
      font-size: 24px;
    }
    button {
      font-size: 24px;
      height: 50px;
      aspect-ratio: 1/ 1;
      border-radius: 50%;
      background: none;
      color: #4e1388;
      border: none;
      outline: none;

      &.loading {
        animation: sendemail 3s forwards;
      }
    }
  }
}
</style>
