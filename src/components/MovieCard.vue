<script lang="ts" setup></script>

<template>
	<div class="wrapper">
		<div class="img-box">ssfdsdf</div>
		<div class="content-box">
			<h3>Гамильтон</h3>
			<div class="genre">Qadasd</div>
			<div class="director">Dasdads</div>
			<div class="actors">Актеры:<span>WsdfsWWWsdfsf</span></div>
			<div class="description">cla</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 5fr;
		width: 100%;
		background-color: var(--gray-dark);
		box-shadow: 0px 2px 2px 0px #00000040;
		color: var(--gray-middle);
      transition: all 200ms;
      cursor: pointer;

      &:hover {
         transform: translateY(-10px);
         box-shadow: 0px 4px 4px 0px #00000040;
      }

		.img-box {
			background-color: var(--gray);
			padding: 10%;
			min-width: 150px;

			@media (max-width: 768px) {
				min-width: 100px;
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
			}

			.genre,
			.director,
			.actors {
				font-size: 12px;
				text-transform: uppercase;
			}

			.actors {
				span {
					color: var(--gray-light);
					font-size: 12px;
					padding-left: 10px;
					text-transform: none;
				}
			}

			.description {
				color: var(--gray-light);
			}
		}
	}
</style>
