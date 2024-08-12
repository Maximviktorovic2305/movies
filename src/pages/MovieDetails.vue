<script lang="ts" setup>
	import { onMounted, ref } from 'vue'
	import { useRoute } from 'vue-router'
	import { instanse } from '../api/axiosConfig'
	import Loader from '../components/Loader.vue'
	import MovieCard from '../components/movie-block/MovieCard.vue'
	import Separator from '../components/Separator.vue'
	import { MovieProps } from '../types'

	const route = useRoute()
	const movie = ref<MovieProps>()
	const loader = ref<boolean>()

	onMounted(async () => {
		try {
			loader.value = true
			const response = await instanse.get(`movie/${route.params.id}`)
			movie.value = await response.data.data
		} catch (error) {
			console.log(error)
		} finally {
			loader.value = false
		}
	})
</script>

<template>
	<div v-if="loader"><Loader /></div>
	<MovieCard v-if="movie" :movie="movie" type="movieDetails" />

	<div v-else class="back-to-home">
		<router-link to="/">
			<div>
				<img src="/Vector.png" alt="vector" />
				<span> Назад к списку </span>
			</div>
		</router-link>
		<Separator />

		<div class="not-found-block">
			<Loader v-if="loader" />
			К сожалению, по вашему запросу ничего не найдено...
		</div>
	</div>
</template>

<style scoped>
	.back-to-home {
		a {
			font-size: 20px;
			color: var(--red-light);

			@media (max-width: 768px) {
				font-size: 16px;
			}
		}
		div {
			display: flex;
			align-items: center;
			gap: 18px;
			color: var(--red-light);

			span {
				font-size: 20px;
				@media (max-width: 768px) {
					font-size: 16px;
				}
			}
		}
		.not-found-block {
			font-size: 32px;
			font-weight: 500;
			line-height: 32px;
			color: var(--white);
		}
	}
</style>
