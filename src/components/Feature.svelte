<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="w-full p-12 bg-gradient-to-r from-[#EED3F5] to-[#dbd4f2] rounded-[5px] text-center">
	<svelte:element this={blok.headline_level} class="text-2xl text-[#772D8B]"
		>{blok.headline}</svelte:element
	>
</div>
