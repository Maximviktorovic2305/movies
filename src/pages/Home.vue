<script lang="ts" setup>
	import { computed } from 'vue'
	import MovieBlock from '../components/movie-block/MovieBlock.vue'
	import Separator from '../components/Separator.vue'
	import Sort from '../components/sort/Sort.vue'
	import store from '../store'

	const movies = computed(() => store.state.movies)
</script>

<template>
	<div class="home">
		<h2>Фильмы</h2>

		<Sort />
		<Separator />

		<MovieBlock />
		<!-- <Loader v-else="movies.length === 0" /> -->
	</div>
</template>

<style lang="scss" scoped>
	.home {
		h2 {
			font-size: 32px;
			font-weight: 500;
			line-height: 32px;
			text-align: left;
			color: var(--white);
			margin-bottom: 16px;
		}
	}
</style>
