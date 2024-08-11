<script lang="ts" setup>
	import { computed, onMounted } from 'vue'
	import store from '../../store/index.ts'
	import Loader from '../Loader.vue'
	import MovieCard from './MovieCard.vue'

	onMounted(() => {
		store.dispatch('getMovies')
	})

	const movies = computed(() => store.state.movies)
	const loading = computed(() => store.state.loading)   

	console.log(movies)
</script>

<template>
	<div v-if="loading"><Loader /></div>
	<div v-else class="movie-block">
		<MovieCard
			type="listItem"
			v-for="movie of movies"
			:key="movie.id"
			:movie="movie" />
	</div>
</template>

<style lang="scss" scoped>
	.movie-block {
		display: grid;
		gap: 24px;
	}
</style>
