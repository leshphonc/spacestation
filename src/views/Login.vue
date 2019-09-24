<template>
  <div>
    <van-field v-model="account"></van-field>
    <van-field v-model="pwd"></van-field>
    <van-button type="primary" @click="_login">登录</van-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      account: "",
      pwd: ""
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    ...mapActions("login", ["login"]),
    ...mapActions("home", ["checkout"]),
    ...mapActions(["test"]),
    _login() {
      this.login({ account: this.account, pwd: this.pwd });
    }
  }
};
</script>
