<script lang="ts" setup></script>

<template>
	<header class="header">#movienow</header>
</template>

<style lang="scss" scoped>
	.header {
		width: 100%;
		max-height: 100px;
		background-color: var(--red);
		color: var(--black);
		padding: 26px 0px;
		text-transform: uppercase;
		font-size: 48px;
		font-weight: 700;
		line-height: 48px;
		letter-spacing: 0.21em;
		text-align: center;

		@media (max-width: 1200px) {
			font-size: 32px;
		}

		@media (max-width: 768px) {
			font-size: 26px;
			padding: 10px 0px;
		}
		@media (max-width: 420px) {
			font-size: 18px;
			padding: 6px 0px;
		}
	}
</style>
