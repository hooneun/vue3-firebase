<template>
  <div class="grid grid-cols-1 pt-10 max-w-2xl text-center m-auto">
    <div class="text-xl text-gray-700">Join</div>
    <div class="text-5xl">Create your account</div>
    <form @submit="signUp" class="pt-4">
      <div class="flex flex-col">
        <label for="name" class="text-left required">Name</label>
        <input
          type="text"
          name="name"
          required
          class="border border-gray-400 rounded-md h-8 px-3"
        />
      </div>
      <div class="flex flex-col mt-5">
        <label for="email" class="text-left required">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          required
          class="border border-gray-400 rounded-md h-8 px-3"
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
          class="border border-gray-400 rounded-md h-8 px-3"
          v-model="credentials.password"
        />
      </div>

      <button class="btn btn-blue mt-10" type="button" @click="signUp">
        Submit
      </button>
    </form>

    <div>
      <button @click="socialSignUp" name="google" class="btn btn-blue mt-3">
        Google Login
      </button>
    </div>
  </div>
</template>
<script>
import { auth } from "../../compositions/auth";
export default {
  setup() {
    const { credentials, signUp, socialSignUp } = auth();

    return {
      credentials,
      signUp,
      socialSignUp,
    };
  },
};
</script>