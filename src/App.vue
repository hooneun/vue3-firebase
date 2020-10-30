<template>
  <div>
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
