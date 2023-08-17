<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="px-6 space-y-10">
		{#each blok.body as blok}
			<StoryblokComponent {blok} />
		{/each}
	</div>
{/key}
