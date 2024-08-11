<script lang="ts" setup>
	import { MovieProps } from '../../types'
	import Separator from '../Separator.vue'
	import TimerBlock from '../TimerBlock.vue'

	interface Props {
		movie: MovieProps
		type: 'listItem' | 'movieDetails'
	}

	const props = defineProps<Props>()
	const isDetailsType = props.type === 'movieDetails'
</script>

<template>
	<div class="back-to-home" v-if="isDetailsType">
		<router-link to="/">
			<div>
				<img src="/Vector.png" alt="vector" />
				<span> Назад к списку </span>
			</div>
		</router-link>
		<Separator />
	</div>

	<div
		:class="{
			wrapper: type === 'listItem',
			'wrapper-movieDetails': type === 'movieDetails',
		}">
		<router-link
			class="img-box"
			:to="{ name: 'movieById', params: { id: props.movie.id } }">
			<div>
				<img
					v-if="props.movie.frames"
					:src="props.movie.frames[0] ? props.movie.frames[0] : '/no-image.png'"
					alt="image" />
			</div>
		</router-link>
		<div class="content-box">
			<h3>{{ props.movie.title }}</h3>
			<div class="genries">
				<span class="year">{{ props.movie.year }}</span>
				<span
					class="genre"
					v-for="(genre, index) of props.movie.genres"
					:key="index"
					>, {{ genre }}</span
				>
			</div>
			<div class="directors">
				<span>режиссер: </span>
				<span
					class="director"
					v-for="(director, index) of props.movie.directors"
					:key="index"
					>{{ director }} {{ ' ' }}
				</span>
			</div>
			<div class="actors">Актеры:</div>
			<div class="description">{{ props.movie.description }}</div>
		</div>

		<TimerBlock :time="props.movie.collapse" />
	</div>
</template>

<style lang="scss" scoped>
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
	}
	.wrapper-movieDetails {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 5fr;
		width: 100%;
		background-color: var(--gray-dark);
		box-shadow: 2px 6px 6px 2px #00000040;
		color: var(--gray-middle);
		cursor: pointer;

		@media (max-width: 1440px) {
			grid-template-columns: 1fr 3fr;
		}

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
		}

		.img-box {
			background-color: var(--gray);
			padding: 10%;
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;

			div {
				width: 100%;
				height: 100%;

				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}

			@media (max-width: 768px) {
				padding: 10% 20%;
				min-width: 200px;
				width: 100%;
				min-height: 200px;
				background-size: cover;
			}
		}

		.content-box {
			padding: 3%;
			display: flex;
			flex-direction: column;
			gap: 7px;
			line-height: 1;
			font-weight: 700;
			text-align: left;

			& h3 {
				margin-bottom: 10px;
				font-size: 36px;
				color: var(--white);

				@media (max-width: 768px) {
					font-size: 24px;
				}

				@media (max-width: 420px) {
					font-size: 16px;
				}
			}

			.genries,
			.directors,
			.actors {
				font-size: 12px;
				text-transform: uppercase;

				span {
					font-size: 12px;
					text-transform: uppercase;
				}
			}

			.director {
				span {
					color: var(--gray-light);
					font-size: 12px;
					padding-left: 10px;
					text-transform: none;
				}
			}

			.description {
				color: var(--gray-light);
				font-size: 16px;
				font-weight: 400;
				line-height: 20px;
				text-align: left;

				@media (max-width: 768px) {
					font-size: 12px;
					line-height: 1.2;
				}
			}
		}
	}

	.wrapper {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 5fr;
		width: 100%;
		background-color: var(--gray-dark);
		box-shadow: 0px 2px 2px 0px #00000040;
		color: var(--gray-middle);
		transition: all 200ms;
		cursor: pointer;

		@media (max-width: 1440px) {
			grid-template-columns: 1fr 3fr;
		}

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
		}

		&:hover {
			transform: translateY(-10px);
			box-shadow: 0px 4px 4px 0px #00000040;
		}

		.img-box {
			background-color: var(--gray);
			padding: 10%;
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;

			div {
				width: 100%;
				height: 100%;

				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}

			@media (max-width: 768px) {
				padding: 10% 20%;
				min-width: 200px;
				width: 100%;
				min-height: 200px;
				background-size: cover;
			}
		}

		.content-box {
			padding: 3%;
			display: flex;
			flex-direction: column;
			gap: 7px;
			line-height: 1;
			font-weight: 700;
			text-align: left;

			& h3 {
				margin-bottom: 10px;
				font-size: 36px;
				color: var(--white);

				@media (max-width: 768px) {
					font-size: 24px;
				}

				@media (max-width: 420px) {
					font-size: 16px;
				}
			}

			.genries,
			.directors,
			.actors {
				font-size: 12px;
				text-transform: uppercase;

				span {
					font-size: 12px;
					text-transform: uppercase;
				}
			}

			.director {
				span {
					color: var(--gray-light);
					font-size: 12px;
					padding-left: 10px;
					text-transform: none;
				}
			}

			.description {
				color: var(--gray-light);
				font-size: 16px;
				font-weight: 400;
				line-height: 20px;
				text-align: left;

				@media (max-width: 768px) {
					font-size: 12px;
					line-height: 1.2;
				}
			}
		}
	}
</style>
