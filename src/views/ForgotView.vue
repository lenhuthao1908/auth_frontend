<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent="submit">
      <div
        v-if="notify.cls"
        :class="`text-center alert alert-${notify.cls}`"
        role="alert"
      >
        {{ notify.message }}
      </div>
      <h1 class="h3 mb-3 font-weight-normal">Please insert your email</h1>
      <label class="sr-only">Email address</label>
      <input
        v-model="email"
        type="email"
        class="form-control mb-3"
        placeholder="Email address"
        required
        autofocus
      />
      <div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Submit
        </button>
        <p class="mt-4 text-muted">&copy; 2023-2024</p>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const email = ref();

    const notify = reactive({
      cls: "",
      message: "",
    });

    const submit = async () => {
      try {
        await axios.post("forgot", {
          email: email.value,
        });
        notify.cls = "success";
        notify.message = "Email was sent!";
      } catch (e) {
        notify.cls = "danger";
        notify.message = "Email dose not exist!";
      }
    };

    return {
      email,
      submit,
      notify,
    };
  },
};
</script>

<style></style>
