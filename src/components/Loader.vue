<script lang="ts" setup></script>

<template>
	<div class="loader"><img src="/Loader.png" alt="loader" /></div>
</template>

<style lang="scss" scoped>
	.loader {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 75px;
		height: 75px;
		transform: translate3d(-50%);
		animation: rotate 0.8s infinite linear;

		img {
			width: 100%;
			height: 100%;
		}

		@keyframes rotate {
			0% {
				transform: rotate(0);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
</style>
