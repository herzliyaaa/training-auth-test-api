<template>
  <div>
    <form @submit.prevent="loginUser">
      <input type="text" placeholder="email" v.model="login.email" />

      <input type="password" placeholder="password" v.model="login.password" />

      <button type="submit">SIGN IN</button>
    </form>
  </div>
</template>

<script>
export default {
  name: LoginPage,
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/login", this.login);

        let token = response.data.data.token;
        localStorage.setItem("user", token);
        this.$router.push("/is-verified");
      } catch (e) {
        console.log(e.response);
      }
    },
  },
};
</script>
