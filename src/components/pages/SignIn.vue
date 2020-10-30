<template>
  <div class="grid grid-cols-1 pt-10 max-w-2xl text-center m-auto">
    <div class="text-xl text-gray-700">Sign In</div>
    <div class="text-5xl">Sign in your</div>
    <form @submit="signIn">
      <div class="flex flex-col mt-5">
        <label for="email" class="text-left required">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          required
          v-model="credentials.email"
        />
      </div>
      <div class="flex flex-col mt-5">
        <label for="password" class="text-left required">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password..."
          required
          v-model="credentials.password"
        />
      </div>
      <button class="btn btn-green mt-10" @click="signIn">Sign In</button>
    </form>
  </div>
</template>
<script>
import { auth } from "../../compositions/auth";
export default {
  setup() {
    const { credentials, signIn } = auth();

    return {
      credentials,
      signIn,
    };
  },
};
</script>