import { createStore } from "vuex";
import CarModule from "./car.store";
import CustomerModule from "./customer.store.js";
import AuthModule from "./auth.store.js";

export default createStore({
  modules: {
    car: CarModule,
    customer: CustomerModule,
    auth: AuthModule,
  },
});
