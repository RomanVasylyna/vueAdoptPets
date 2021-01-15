<template>
  <div class="cats">
    <h1>Cats</h1>
    <b-table striped hover :items="cats"></b-table>
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
