
<template>
    <Nav/>
  <div class="max-w-7xl mx-auto">

    <!-- <div v-if="authStore.user">
      <h1>{{ authStore.user.name }}</h1>
      <p>{{ authStore.user.email }}</p>
      <h2></h2>
    </div>
    <div v-else>
      <h1>Go and login</h1>
    </div> -->
  </div>
</template>
<script setup>
import { defineComponent } from 'vue'
import { onMounted } from "vue";
import { useAuthStore } from "/src/stores/auth";
import Nav from "./Nav.vue";


  // Other component options and code

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});


</script>

<script>

export default defineComponent({
    name: "Home",
  components: {
    Nav
  },
});
</script>
