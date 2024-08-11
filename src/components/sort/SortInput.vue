<script lang="ts" setup>
	import store from '../../store/index.ts'

	const { label } = defineProps<{ label: string }>()

	const handleSetSort = (e: Event) => {
		const { id } = e.target as HTMLInputElement

		if (id) {
			store.dispatch('setSortingOption', id)
		} else {
			store.dispatch('setSortingOption', '')
		}
	}
</script>

<template>
	<input @change="handleSetSort" :id="label" type="radio" name="radio" />
	<label for="radio">{{ label }}</label>
</template>

<style lang="scss" scoped>
	input[type='radio'] {
		cursor: pointer;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: 0;
		background: inherit;
		height: 15px;
		width: 15px;
		border: 1px solid var(--gray);

		&:checked {
			background: var(--red-light);
			border: unset;
		}
		&:disabled {
			background: inherit;
		}
		&:after {
			content: '';
			position: relative;
			left: 30%;
			top: 7%;
			width: 25%;
			height: 60%;
			border: solid #ffffff;
			border-width: 0 2px 2px 0;
			transform: rotate(45deg);
			display: none;
		}
		&:checked:after {
			display: block;
		}
		&:disabled:after {
			border-color: var(--gray);
		}
	}
</style>
