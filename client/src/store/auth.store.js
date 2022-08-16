export default {
    state: {
     user: "",
    },

    getters: {
        USERS: state => {
          return state.user;
        }
      },

    mutations: {
      SET_USER (state, payload) {
        state.user = payload;
      },
    },

    actions: {
      SET_USER (context, payload) {
        // const favorites = context.state.favorites;
        // favorites.push(payload);
        context.commit("SET_USER", payload);
      },

      
    },
  };
  