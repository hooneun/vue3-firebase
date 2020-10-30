<template>
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto flex justify-between items-center h-16">
      <router-link to="/">Firebase Vue CURD<router-link>
      <div>
        <button class="font-bold py-2 px-4">Sigin In</button>
        <button class="font-bold py-1 px-2 border rounded-lg">Sigin Up</button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  setup() {
    // const router = useRouter();
    // console.log(router);
  },
};
</script>