import axios from "axios";

export default {
  login: (account, pwd) =>
    axios.post("/appapi.php?c=Merchantapp&a=login", {
      account,
      pwd
    })
};
