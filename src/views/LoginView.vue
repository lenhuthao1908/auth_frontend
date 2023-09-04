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
      <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
      <label class="sr-only">Email address</label>
      <input
        v-model="data.email"
        type="email"
        class="form-control mb-2"
        placeholder="Email address"
        required
        autofocus
      />
      <label class="sr-only">Password</label>
      <input
        v-model="data.password"
        type="password"
        class="form-control mb-2"
        placeholder="Password"
        required
      />
      <div class="mt-3 text-left mb-2">
        <router-link to="/forgot">Forgot password</router-link>
      </div>
      <div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2023-2024</p>
      </div>
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
      email: "",
      password: "",
    });

    const notify = reactive({
      cls: "",
      message: "",
    });

    const router = useRouter();

    let userRole = null;

    const submit = async () => {
      try {
        const response = await axios.post("login", data, {
          withCredentials: true,
        });

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        userRole = response.data.role;
        console.log(userRole);

        if (userRole === "admin") {
          await router.push("/admin");
        } else {
          await router.push("/");
        }
      } catch (e) {
        notify.cls = "danger";
        notify.message = "Login failed!";
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
      userRole,
    };
  },
};
</script>

<style></style>
