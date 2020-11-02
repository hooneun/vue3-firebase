<template>
  <div>Home</div>
  <div>
    <form @submit="setPost">
      <label for="title">Title: </label>
      <input type="text" name="title" id="title" v-model="state.title" />
      <label for="desc">Desc: </label>
      <input type="text" name="desc" id="desc" v-model="state.desc" />
      <button type="button" @click="setPost">Submit</button>
    </form>
  </div>

  <table>
    <tr>
      <th>title</th>
      <th>desc</th>
      <th>created_at</th>
    </tr>
    <tr v-for="post in postList" :key="post.id">
      <td>{{ post.title }}</td>
      <td>{{ post.desc }}</td>
      <td>{{ post.createdAt }}</td>
    </tr>
  </table>
</template>
<script>
import { firebaseStore, firebaseInstance } from "../../fbase";
import { post } from "../../compositions/post";
import { onMounted } from "vue";
export default {
  setup() {
    const { state, getPost, setPost, postList } = post();
    onMounted(() => {
      getPost();
    });
    return {
      state,
      setPost,
      postList,
    };
  },
};
</script>