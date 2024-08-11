<script lang="ts" setup>
	import { computed, onMounted } from 'vue'
	import store from '../../store/index.ts'
	import MovieCard from './MovieCard.vue'

	const movies = computed(() => store.state.movies)

	onMounted(() => {
		store.dispatch('getMovies')
		store.dispatch('setSortingOption', '')
	})

	// const sortedArray = computed(() => {
	// 	if (store.state.activeSortingOption === 'Отсортировать по названию') {
	// 		return [...movies].sort((a: MovieProps, b: MovieProps) =>
	// 			b.title.localeCompare(a.title),
	// 		)
	// 	} else if (store.state.activeSortingOption === 'Отсортировать по году') {
	// 		return [...movies].sort((a: MovieProps, b: MovieProps) => a.year - b.year)
	// 	} else  {
	// 		return movies
	// 	}
	// })
</script>

<template>
	<div class="movie-block">
		<MovieCard type="listItem" v-for="movie of movies" :key="movie.id" :movie="movie" />
	</div>
</template>

<style lang="scss" scoped>
	.movie-block {
		display: grid;
		flex-direction: column;
		gap: 24px;
	}
</style>
