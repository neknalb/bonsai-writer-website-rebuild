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

<div class="mx-auto w-full max-w-[800px] px-8">
	<ul class="list-image-none">
		{#each news as aNews (aNews.date)}
			<li class="mb-18">
				<News date={aNews.date} title={aNews.title} content={aNews.content} />
			</li>
		{/each}
	</ul>
</div>
