<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/home" class="navbar-brand">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav mr-auto"></ul>

          <div v-if="!auth">
            <router-link
              @click="logout"
              to="/login"
              class="btn btn-outline-success ml-2 my-2 my-sm-0"
              >Login</router-link
            >
            <router-link
              to="/register"
              class="btn btn-outline-danger ml-2 my-2 my-sm-0"
            >
              Register</router-link
            >
          </div>
          <div v-if="auth">
            <router-link
              to="/"
              class="btn btn-outline-light me-2"
              @click="logout"
              >Logout</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const auth = computed(() => store.state.auth);
    const logout = async () => {
      await axios.post(
        "http://localhost:8081/api/logout",
        {},
        { withCredentials: true }
      );
      window.location.reload();
    };
    return {
      auth,
      logout,
    };
  },
  // setup() {
  //   const auth = ref(false);
  //   onMounted(async () => {
  //     try {
  //       await axios.get("user");
  //       auth.value = true;
  //     } catch (error) {
  //       auth.value = false;
  //       console.error(error);
  //     }
  //   });
  //   const logout = async () => {
  //     try {
  //       await axios.post("logout", {}, { withCredentials: true });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   return {
  //     auth,
  //     logout,
  //   };
  // },
};
</script>

<style></style>
