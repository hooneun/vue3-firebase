<template>
  <form @submit="submit">
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
    <button type="button" @click="submit">Submit</button>
  </form>

  <div>
    <button @click="socialSubmit" name="google">Google Login</button>
  </div>
</template>
<script>
import { auth } from "../compositions/auth";
export default {
  setup() {
    const { credentials, submit, socialSubmit } = auth();

    return {
      credentials,
      submit,
      socialSubmit,
    };
  },
};
</script>