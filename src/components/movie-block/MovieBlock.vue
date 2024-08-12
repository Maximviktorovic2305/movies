<script lang="ts" setup>
	import { computed, onMounted } from 'vue'
	import store from '../../store/index.ts'
	import { MovieProps } from '../../types/index.ts'
	import Loader from '../Loader.vue'
	import MovieCard from './MovieCard.vue'

	onMounted(() => {
		store.dispatch('getMovies')
	})

	const movies = computed(() => store.state.movies)
	const loading = computed(() => store.state.loading)
	const sortByName = computed(() => store.state.sortByName)
	const sortByYear = computed(() => store.state.sortByYear)

	const sortedMovies = computed(() => {
		const sorted = [...movies.value]
		if (sortByName.value) {
			const englishWords = sorted
				.filter((item: MovieProps) => /^[A-Za-z]/.test(item.title))
				.sort((a: MovieProps, b: MovieProps) => a.title.localeCompare(b.title))

			const russianWords = sorted
				.filter((item: MovieProps) => /^[а-яА-ЯёЁ]/.test(item.title))
				.sort((a: MovieProps, b: MovieProps) =>
					a.title.localeCompare(b.title, 'ru'),
				)

			return englishWords.concat(russianWords)
		}
		if (sortByYear.value) {
			sorted.sort((a: MovieProps, b: MovieProps) => a.year - b.year)
		}
		return sorted
	})
</script>

<template>
	<div v-if="loading"><Loader /></div>
	<div v-else class="movie-block">
		<MovieCard
			type="listItem"
			v-for="movie of sortedMovies"
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
