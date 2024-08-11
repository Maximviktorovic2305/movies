<script lang="ts" setup>
	import { onMounted, ref } from 'vue'
	import { useRoute } from 'vue-router'
	import { instanse } from '../api/axiosConfig'
	import { MovieProps } from '../types'
import MovieCard from '../components/movie-block/MovieCard.vue';

	const route = useRoute()
	const movie = ref<MovieProps>()

	onMounted(async () => {
		const response = await instanse.get(`movie/${route.params.id}`)
		movie.value = await response.data.data
	})

</script>

<template>
	<MovieCard v-if="movie" :movie="movie" type="movieDetails" />
</template>

<style scoped></style>
