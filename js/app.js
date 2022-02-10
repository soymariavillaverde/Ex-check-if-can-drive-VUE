import { inputPassword } from "./components/InputPassword.js";
import { readMore } from "./components/ReadMore.js";
import {checkAge} from "./components/check-age"

let app = new Vue({
  el: "#app",
  data: {
    title: "Vue - Basics Exercise",
  },
  components: {
    "first-component": inputPassword,
    'read-more': readMore,
    "check-age" : checkAge,
  },
});
