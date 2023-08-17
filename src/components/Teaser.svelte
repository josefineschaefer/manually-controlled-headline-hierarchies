<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<svelte:element
	this={blok.headline_level}
	use:storyblokEditable={blok}
	class="py-32 text-6xl text-[#772D8B] font-bold text-center"
>
	{blok.headline}
</svelte:element>
