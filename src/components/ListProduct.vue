<template>
  <div class="list">
    <header>
      <h2>Menu</h2>
    </header>

    <Tabs
      :categories="categories"
      @select-category="handleCategory"
      show-arrows
    />
    <section v-for="(product, idx) in products" :key="idx">
      <img
        :src="'https://menudigitalqr.herokuapp.com' + product.foto_producto"
        :alt="product.nombre"
        style="height: 100px; width: 100px; object-fit: contain"
      />
      <div class="text-item">
        <div class="title">
          <h3>{{ product.nombre | truncate(14) }}</h3>
          <span>{{ product.precio }}</span>
        </div>
        <p>{{ product.descripcion | truncate(40) }}</p>
      </div>
      <div class="line-horizontal"></div>
    </section>

    <!-- <section>
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
    </section>-->
  </div>
</template>

<script>
import Tabs from "./Tabs.vue";
import axios from "axios";

export default {
  components: { Tabs },

  name: "ListProduct",

  filters: {
    truncate: function(text, stop, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
    }
  },

  data() {
    return {
      categories: [],
      products: []
    };
  },

  created() {
    let id = this.$route.params.id;

    axios.get("https://menudigitalqr.herokuapp.com/menu/" + id).then(result => {
      this.categories = result.data;
      this.products = result.data[0].products;
    });
  },

  methods: {
    handleCategory(id) {
      this.products = this.categories.filter(c => c.id == id)[0].products;
    }
  }
};
</script>

<style>
.list {
  display: flex;
  flex-direction: column;
}
section {
  display: flex;
  align-items: center;
  margin-top: 1rem;
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
  margin-bottom: 1rem;
}

.text-item {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

img {
  width: 100%;
  border-radius: 0.5rem;
}

span {
  font-weight: bold;
}

.line-horizontal {
  margin-top: 2rem;
  margin-bottom: 3rem;
  background: #b9b5b5;
  height: 1px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
