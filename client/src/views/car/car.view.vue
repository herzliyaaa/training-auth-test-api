<template>
  <div>
    <h1>Cars</h1>
    <div class="car-card" v-for="car in cars" :key="car.car_id">
      <img class="upload" :src="car.image_file" alt="car" />
      <h3>Brand: {{ car.make }}</h3>
      <p>Serial No: {{ car.serial_number }}</p>
      <p>Model: {{ car.model }}</p>
      <p>Year: {{ car.year }}</p>
    </div>
  </div>
</template>

<script>
import getCars from "./car.composable";
export default {
  name: "CarPage",
  setup() {
    const { cars, error, load } = getCars();
    load();
    return { cars, error };
  },
};
</script>

<style>
.car-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  background-color: rgb(229, 231, 227);
}

.upload {
  width: 50%;
  max-height: 20%;
}
</style>
