<template>
  <div class="text-center">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
// @ is an alias to /src

export default {
  setup() {
    const message = ref("you are nor logged in");
    const store = useStore();

    onMounted(async () => {
      try {
        const { data } = await axios.get("user");

        message.value = `Hi ${data.first_name} ${data.last_name}`;

        await store.dispatch("setAuth", true);
      } catch (e) {
        await store.dispatch("setAuth", false);
      }
    });

    return {
      message,
    };
  },
};
</script>
