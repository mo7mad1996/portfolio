<script setup lang="ts">
// setup
const toast = useToast();
const api = useApi();

// data
const elementRef = ref<HTMLElement | null>(null); // HTML REF
const loading = ref(false);
const email = ref("");

onMounted(() => {
  setFocus();
  navigator?.clipboard
    ?.readText()
    .then((v) => (email.value = v))
    .catch((err) =>
      toast.error({
        title: "Can't not read clipboard text!",
        message: err.message,
      })
    );
});

// methods
const setFocus = () => elementRef.value?.focus();
const submit = async () => {
  try {
    loading.value = true;
    const { data }: { data: { accepted: string[]; rejected: string[] } } =
      await api.post("/api/send_mail", {
        emails: email.value.split(","),
      });

    const { accepted, rejected } = data;
    accepted.forEach((element) =>
      toast.success({ title: "تم الارسال الى", message: element })
    );
    rejected.forEach((element) =>
      toast.error({ title: "تعذر  تسليم ", message: element })
    );
    email.value = "";
  } catch (err: any) {
    toast.error({
      title: "Can't send EMAIL",
      message: err.message,
    });
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="email grid place-content-center">
    <div>
      <h3
        class="text-sky-700 font-sans capitalize font-bold py-6 drop-shadow-xl"
      >
        Send an email
      </h3>
      <form @submit.prevent="submit" @touchstart="setFocus">
        <label for="to_email" class="!text-sky-700">to:</label>
        <input
          v-model="email"
          id="to_email"
          placeholder="mail@example.com"
          autofocus
          ref="elementRef"
          required
          inputmode="email"
        />

        <button :disabled="loading" :class="{ loading }">
          <fa :icon="['fas', 'paper-plane']" />
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-size: inherit;
}

.email {
  position: relative;

  &::after {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    content: "";
    height: 120px;
    pointer-events: none;
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
    text-align: center;
    font-size: 2em;

    @media (max-width: 720px) {
      margin: 10px auto;
      font-size: 1.2em;
    }
  }

  form {
    margin: auto;
    display: flex;
    max-width: 720px;
    width: 90vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px,
      inset rgba(255, 255, 255, 0.3) 0 10px 10px;
    font-size: 1.7em;
    padding: 0px 20px;
    background: #fff3;
    border-radius: 100px;
    align-items: center;

    @media (max-width: 720px) {
      font-size: 1.2em;
      padding: 0px 10px;
    }

    &:has(:focus) {
      box-shadow: rgba(153, 153, 239, 0.595) 0px 13px 27px -5px,
        rgba(99, 230, 230, 0.89) 0px 8px 16px -8px,
        inset rgba(255, 255, 255, 0.3) 0 4px 20px -6px,
        0 5px 60px -15px rgb(235, 206, 214);
    }

    label {
      color: #333;
      padding: 0 10px;
      text-transform: capitalize;
    }

    input {
      background: none;
      outline: none;
      border: none;
      padding: 20px 0px;
      flex: 1;
      width: 0;
    }
    button {
      // height: 50px;
      padding: 10px;
      // aspect-ratio: 1/ 1;
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
