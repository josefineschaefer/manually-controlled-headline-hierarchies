import Feature from '../components/Feature.svelte';
import Grid from '../components/Grid.svelte';
import Page from '../components/Page.svelte';
import Teaser from '../components/Teaser.svelte';
import Richtext from '../components/Richtext.svelte';

import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: 'jQkPOV1OgDt0jhhpw8fHywtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			richtext: Richtext,
			grid: Grid,
			page: Page,
			teaser: Teaser
		}
	});
	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
