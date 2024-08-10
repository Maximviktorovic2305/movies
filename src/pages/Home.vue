<script lang="ts" setup>
import MovieCard from '../components/MovieCard.vue';
import Separator from '../components/Separator.vue';
import Sort from '../components/Sort.vue';


</script>

<template>
   <div class="home">
      <h2>Фильмы</h2>
      <Sort /> 
      <Separator />

      <MovieCard />
   </div>
</template>

<style lang="scss"scoped>

</style>