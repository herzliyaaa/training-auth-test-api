import { createStore } from "vuex";
import CarModule from "./car.store";
import CustomerModule from "./customer.store.js";

export default createStore({
  modules: {
    car: CarModule,
    customer: CustomerModule,
  },
});
