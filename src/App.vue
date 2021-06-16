<template>
  <p>Times clicked: {{ count }}</p>
  <button @click="increment">increment</button>
  <button @click="fetchBanner">Fetch Banner</button>
  {{ o.maria }}
  <!-- <Alert /> -->
  <Banner v-if="showBanner" />
</template>

<script setup>
import { ref, reactive, defineAsyncComponent, defineComponent, h } from "vue";
import { Alert } from "./Alert";
// import { Banner } from "./";
// import Banner from "./components/Banner";

// import Banner from '@ahsath/vuei/Banner'
// import { Banner } from '@ahsath/vuei'

const Banner = defineAsyncComponent({
  loader: () => import("./components/Banner"),
  loadingComponent: defineComponent({
    render() {
      return h("div", {}, "Loading...");
    },
  }),
  delay: 50,
});

const count = ref(0);
const o = ref({ maria: 123 });
const showBanner = ref(false);
setTimeout(() => {
  o.value.maria = 15;
}, 4000);
const increment = () => count.value++;
const fetchBanner = () => (showBanner.value = true);
</script>