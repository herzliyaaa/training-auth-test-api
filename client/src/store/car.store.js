export default {
  state: {
    cars: [],
  },
  mutations: {
   ADD_CAR (state, payload) {
      state.cars = payload;
    },
  },
  actions: {
    editCar({commit}, payload) {
      
      const car = {
        serial_number: payload.serial_number,
        make: payload.make,
        model: payload.model,
        color: payload.color,
        year: payload.year
      }

      const favorites = context.state.favorites;
      favorites.push(payload);
      context.commit("UPDATE_FAVORITES", favorites);
    },
  },
};
