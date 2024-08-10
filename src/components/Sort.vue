<script lang="ts" setup>
	import SortInput from './SortInput.vue'
</script>

<template>
	<div class="wrapper">
		<div>
			<SortInput label="Отсортировать по названию" />
		</div>
		<div>
			<SortInput label="Отсортировать по году" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.wrapper {
		display: flex;
		align-self: center;
		gap: 32px;

		div {
			display: flex;
			align-items: center;
			gap: 10px;
			font-size: 16px;
			line-height: 16px;
			text-align: left;
			color: var(--gray);
		}
	}
</style>
