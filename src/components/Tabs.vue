<template>
  <v-card>
    <v-tabs background-color="deep-purple accent-4" center-active>
      <v-tab
        v-for="(category, index) in categories"
        :key="index"
        @click="$emit('select-category', category.id)"
      >
        {{ category.nombre }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>
<script>
// index.js or main.js
export default {
  name: "Tabs",
  props: {
    categories: Array
  }
};
</script>
