<template>
  <transition name="van-slide-left">
    <div class="home">
      <van-button type="primary" @click="showValue">默认按钮</van-button>
      <div>{{ home.box }}</div>
      <input type="text" :value="ipt" />
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      ipt: 123
    };
  },
  computed: {
    ...mapState(["home"])
  },
  watch: {},
  created() {},
  mounted() {
    this.test();
  },
  destroyed() {},
  methods: {
    ...mapActions(["test"]),
    showValue() {
      console.log(this.ipt);
    },
    login() {
      this.$store.login.login();
    }
  }
};
</script>
