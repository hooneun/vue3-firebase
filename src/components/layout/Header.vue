<template>
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto flex justify-between items-center h-16">
      <router-link to="/">Firebase Vue CURD</router-link>
      <div>
        <router-link
          tag="button"
          :to="{ name: 'SignIn' }"
          class="font-bold py-2 px-4"
          >Sign In</router-link
        >
        <router-link
          tag="button"
          :to="{ name: 'SignUp' }"
          class="font-bold py-1 px-2 border rounded-lg"
          >Sigin Up</router-link
        >
      </div>
    </div>
  </header>
</template>
<script>
// import { useRouter } from "vue-router";
export default {
  setup() {
    // const router = useRouter();
    // console.log(router);
  },
};
</script>