<script lang="ts">
	import * as newsAPI from '$lib/apis/newsAPI'
	import { onMount } from 'svelte'
	import News from '$lib/components/News.svelte'

	let news: Array<newsAPI.News> = $state([])

	onMount(async () => {
		const response = await newsAPI.getNews()
		news = response.result
	})
</script>

{#each news as aNews (aNews.date)}
	<li>
		<News date={aNews.date} title={aNews.title} content={aNews.content} />
	</li>
{/each}
