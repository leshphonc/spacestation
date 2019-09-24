import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import errorcode from "@/config/errorcode";
import { Button, Field, Toast, Notify } from "vant";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Notify);

// axios全局请求拦截
axios.interceptors.request.use(
  config => {
    console.log(config);
    Toast.loading({
      mask: true,
      message: "加载中...",
      duration: 0
    });
    return config;
  },
  error => {
    console.log(error);
    Toast.fail(error.message);
  }
);
axios.interceptors.response.use(
  config => {
    console.log(config);
    Toast.clear();
    if (config.data.errorCode !== errorcode.SUCCESS) {
      Notify({ type: "warning", message: config.data.errorMsg });
      return config;
    }
    Notify({ type: "success", message: "登录成功" });
    router.push("/");
    return config;
  },
  error => {
    console.log(error);
    Toast.fail(error.message);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
