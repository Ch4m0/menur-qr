<template>
  <div class="list">
    <header>
      <h2>Bienvenido a Quiles</h2>
    </header>
    <section v-for="(product, idx) in products" :key="idx">
      <img :src="product.foto_producto" :alt="product.nombre" />
      <div class="text-item">
        <div class="title">
          <h3>{{ product.nombre }}</h3>
          <span>{{ product.precio }}</span>
        </div>
        <p>{{ product.descripcion }}</p>
      </div>
      <div class="line-horizontal"></div>
    </section>

    <section>
      <img src="@/assets/media/burguer_ltZlWTt.jpg" alt="Hamburguesa doble carne" />
      <div class="text-item">
        <div class="title">
          <h3>Hamburguesa doble carne</h3>
          <span>1.5k</span>
        </div>
        <p>
          Nuestra deliciosa hamburguesa de carne de res X 2 preparada con los
          mejores ingredientes y la sensacional salsa blanca para disfrutar en
          cualquier momento del día.\r\n\r\nQué incluye: 150g de carne de res X
          2, pan, tomate, lechuga y queso doble crema.
        </p>
      </div>
    </section>

    <div class="line-horizontal"></div>

    <section>
      <img src="@/assets/media/CANTUA.jpg" alt="Hamburguesa doble carne" />
      <div class="text-item">
        <div class="title">
          <h3>Salchipapa Mixta</h3>
          <span>1.5k</span>
        </div>
        <p>Salchicha Zenú, carne, pollo, chorizo, butifarra, queso mozzarella, salsa de la casa, salsa rosada y papas chips.</p>
      </div>
    </section>

    <div class="line-horizontal"></div>

    <section>
      <img src="@/assets/media/perrocaliente.jpg" alt="Hamburguesa doble carne" />
      <div class="text-item">
        <div class="title">
          <h3>Perro Ranchero</h3>
          <span>1.5k</span>
        </div>
        <p>Perro en pan Bimbo con chorizo ranchero premium, salchicha long y queso mozzarella."</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListProduct",
  data() {
    return {
      products: []
    };
  },
  created() {
    axios.get("http://localhost:8000/product/").then(result => {
      console.log(result);
      this.products = result.data;
    });
  }
};
</script>

<style>
.list {
  display: flex;
  flex-direction: column;
}

header {
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  background: #000;
  color: white;
}

img {
  height: 203px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-item {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

img {
  width: 100%;
}

span {
  font-weight: bold;
}

.line-horizontal {
  margin-top: 2rem;
  margin-bottom: 2rem;
  background: #f0eded;
  height: 1px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
