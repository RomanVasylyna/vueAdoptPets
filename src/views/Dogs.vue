<template>
  <div class="dogs">
    <h1>Dogs for adoption</h1>
    <b-table striped hover :items="dogs">

      <!-- First Column contains links -->
       <template #cell(name)="data">

        <router-link :to="`/pets/dogs/${data.index}`">
        {{ data.value }}
        </router-link>

      </template>

      
    </b-table>
  </div>
</template>

<script>
// Importing Dogs Array from vuex store state
import { mapState } from 'vuex';

export default {
  name: 'Dogs',
  
  computed: {
  ...mapState([
  'dogs'  
  ])  
  }
}
</script>
