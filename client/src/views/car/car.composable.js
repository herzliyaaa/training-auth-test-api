import { ref } from "vue";

const getCars = () => {
  const cars = ref([]);
  const error = ref(null);
  const api = "http://localhost:3000/cars";
  const load = async () => {
    try {
      let data = await fetch(api);
      if (!data.ok) {
        throw Error("no available data");
      }
      cars.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { cars, error, load };
};

export default getCars;
