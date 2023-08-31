<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<svelte:element
	this={blok.headline_level}
	use:storyblokEditable={blok}
	class="py-32 font-bold text-center"
>
	{blok.headline}
</svelte:element>
