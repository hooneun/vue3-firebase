<template>
  <h6>Chat</h6>

  <div>
    <div v-if="!state.username">
      <div>You can't chat without a name. What's your name?</div>
      <input type="text" placeholder="Name" @keyup.enter="updateUsername" />
    </div>
    <div v-else>
      <div>From: {{ state.username }}</div>
      <div>Message:</div>
      <textarea
        cols="30"
        rows="10"
        placeholder="New Message"
        @keyup.enter="sendMessage"
      ></textarea>
    </div>
  </div>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      {{ message.username }}: {{ message.text }}
    </div>
  </div>
</template>
<script>
import { onMounted, reactive } from "vue";
import { firebaseStore } from "../../fbase";
export default {
  setup() {
    const state = reactive({
      username: "",
      message: [],
    });
    const messages = reactive([]);

    const updateUsername = (e) => {
      e.preventDefault();
      if (e.target.value) {
        state.username = e.target.value;
      }
    };

    const sendMessage = (e) => {
      e.preventDefault();
      if (e.target.value) {
        const message = {
          username: state.username,
          text: e.target.value,
        };

        firebaseStore
          .collection("message")
          .add(message)
          .then((docRef) => {})
          .catch((error) => {
            console.log("error", error);
          });

        e.target.value = "";
      }
    };

    const syncMessage = () => {
      firebaseStore.collection("message").onSnapshot((doc) => {
        doc.docChanges().forEach((item) => {
          if (item.type === "added") {
            messages.push(item.doc.data());
          }
        });
      });
    };

    onMounted(() => {
      syncMessage();
    });

    return {
      state,
      messages,
      updateUsername,
      sendMessage,
    };
  },
};
</script>