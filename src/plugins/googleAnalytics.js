import Vue from "vue";
import VueAnalytics from "vue-analytics";

if (process.env.NODE_ENV === "production") {
  Vue.use(VueAnalytics, {
    id: "UA-138050457-1"
  });
}
