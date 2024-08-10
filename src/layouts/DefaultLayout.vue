<script lang="ts" setup>
	import Header from '../components/Header.vue'
</script>

<template>
	<div class="layout">
		<Header />
		<main class="main">
			<router-view />
		</main>
	</div>
</template>

<style lang="scss" scoped>
	.layout {
		min-height: 100vh;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.main {
			flex-grow: 1;
			background-color: var(--gray-deep);
			padding: 40px 260px;

			@media (max-width: 1200px) {
				padding: 30px 160px;
			}

			@media (max-width: 768px) {
				font-size: 26px;
				padding: 20px 70px;
			}
			@media (max-width: 420px) {
				font-size: 18px;
				padding: 20px 20px;
			}
		}
	}
</style>
