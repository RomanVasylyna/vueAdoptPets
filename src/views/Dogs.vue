<template>
  <div class="dogs">
    <h1>Dogs for adoption</h1>
    <b-table striped hover :items="dogs">

      <!-- First Column contains links -->
       <template #cell(name)="data">

        <router-link :to="`/pets/${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">
        {{ data.value }}
        </router-link>

      </template>

      
    </b-table>
  </div>
</template>

<script>
// Importing Dogs Array
import dogs from '@/data/dogs.js';

export default {
  name: 'Dogs',
  data() {
  return {
  dogs  
  }  
  }
}
</script>
