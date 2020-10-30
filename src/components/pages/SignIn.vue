<template>
  <form @submit="signIn">
    <input
      type="email"
      name="email"
      placeholder="Email..."
      required
      v-model="credentials.email"
    />
    <input
      type="password"
      name="password"
      placeholder="password..."
      required
      v-model="credentials.password"
    />
    <button type="button" @click="signIn">Sign In</button>
  </form>
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