<script lang="ts" setup>
	import { CollapseProps } from '../types'

	interface Props {
		time?: CollapseProps
	}

	const props = defineProps<Props>()

	const timer = props?.time?.duration
	const timeString = timer?.toString()
</script>

<template>
	<div v-if="props.time?.duration" class="timer">
		<span>{{ timeString }}</span>
      <img src="/Kadr.png" alt="kadr">
	</div>
</template>

<style lang="scss" scoped>
	.timer {
		color: red;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
      gap: 8px;   
		top: 32px;
		right: 0;
		width: 184px;
		height: 30px;
		background-color: var(--gray);
		clip-path: polygon(4% 0, 100% 0, 100% 100%, 0% 100%);

      @media (max-width: 768px) {
			top: 0px;
         right: 0px;
		}

		span {
			font-size: 12px;
			font-weight: 700;
			line-height: 12px;
			text-transform: uppercase;
         color: var(--black);
		}
	}
</style>
