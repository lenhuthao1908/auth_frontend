<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent="submit">
      <h1 class="h3 mb-3 font-weight-normal">Please insert your password</h1>
      <label class="sr-only">Password</label>
      <input
        type="password"
        class="form-control mb-2"
        placeholder="Password"
        required
        v-model="data.password"
      />
      <label class="sr-only">Password Confirm</label>
      <input
        type="password"
        class="form-control mb-2"
        placeholder="Password Confirm"
        required
        v-model="data.password_confirm"
      />
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Submit
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2023-2024</p>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const data = reactive({
      password: "",
      password_confirm: "",
    });

    const route = useRoute();
    const router = useRouter();

    const submit = async () => {
      await axios.post(`reset/${route.params.token}`, data);
      await router.push("/login");
      window.location.reload();
    };

    return {
      data,
      submit,
    };
  },
};
</script>

<style></style>
