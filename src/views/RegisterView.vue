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
      <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
      <label class="sr-only">First Name</label>
      <input
        type="text"
        class="form-control mb-2"
        placeholder="First Name"
        required
        autofocus
        v-model="data.first_name"
      />
      <label class="sr-only">Last Name</label>
      <input
        type="text"
        class="form-control mb-2"
        placeholder="Last Name"
        required
        autofocus
        v-model="data.last_name"
      />
      <label class="sr-only">Email address</label>
      <input
        type="email"
        class="form-control mb-2"
        placeholder="Email address"
        required
        autofocus
        v-model="data.email"
      />
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
import { useRouter } from "vue-router";
export default {
  setup() {
    const data = reactive({
      frist_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      role: "user",
    });

    const notify = reactive({
      cls: "",
      message: "",
    });

    const router = useRouter();

    const submit = async () => {
      try {
        const response = await axios.post("register", data);
        if (response.status == 200) {
          await router.push("/login");
        } else {
          notify.cls = "danger";
          notify.message = "Registration failed!";
          setTimeout(() => {
            notify.cls = "";
            notify.message = "";
          }, 2000);
        }
      } catch (error) {
        notify.cls = "danger";
        notify.message = "Registration failed!";
        setTimeout(() => {
          notify.cls = "";
          notify.message = "";
        }, 2000);
      }
    };

    return {
      data,
      submit,
      notify,
    };
  },
};
</script>

<style></style>
