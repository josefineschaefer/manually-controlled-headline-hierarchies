<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center">
	<svelte:element this={blok.headline_level} class="text-2xl text-[#1d243d] font-bold"
		>{blok.headline}</svelte:element
	>
</div>
