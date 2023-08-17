<script>
	import { storyblokEditable, renderRichText } from '@storyblok/svelte';

	export let blok;
	$: resolvedRichText = renderRichText(blok.text);
</script>

<div use:storyblokEditable={blok} class="prose p-12 mx-auto bg-gradient-to-r from-[#EED3F5] to-[#dbd4f2] rounded-[5px]">
	{@html resolvedRichText}
</div>
