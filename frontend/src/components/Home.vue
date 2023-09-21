<script setup>
import {ref , onMounted} from 'vue';

import axios from 'axios';
const user = ref();
onMounted(async () => {
    const data = await axios.get('/api/user');
    console.log(data);
})
</script>

<template>
    <div class="max-w-7xl mx-auto">
      <div v-if="authStore.user">
        <h1>{{ authStore.user.name }}</h1>
        <p>{{ authStore.user.email }}</p>
      </div>
      <div v-else>
        <h1>Go and login</h1>
      </div>
    </div>
  </template>
