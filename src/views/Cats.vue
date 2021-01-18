<template>
  <div class="cats">
    <h1>Cats for adoption</h1>
    <b-table striped hover :items="cats">
      
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
// Importing Cats Array from data/cats.js
// @ = source directory
import cats from '@/data/cats.js';

export default {
 name: 'Cats',

 data() {
 return {
 cats
 }
 } 

}
</script>
