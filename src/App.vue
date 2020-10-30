<template>
  <div class="container">
    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span3">3</div>
      <div class="row-span-1">1</div>
      <div class="row-span-2">2</div>
    </div>
  </div>
  <Login />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/pages/Login.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Login,
  },
};
</script>
