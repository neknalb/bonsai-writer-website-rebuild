<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown'

	const { date, title, content } = $props()
</script>

<div class="news my-4">
	<h1>{title}</h1>
	<small>{date}</small>
	<div class="ml-8">
		<SvelteMarkdown class="news" source={content} />
	</div>
</div>

<style>
	.news {
		color: rgb(128, 128, 128);
		:global(p) {
			margin-bottom: 6px;
		}
		:global(small) {
			font-weight: 100;
		}
		:global(h1) {
			font-size: 34px;
			font-weight: 900;
			color: rgb(90, 90, 90);
		}
		:global(h2) {
			font-size: 22px;
			font-weight: 900;
			margin-top: 24px;
			margin-bottom: 8px;
		}
		:global(h3) {
			font-size: 18px;
			font-weight: 900;
			margin-top: 4px;
			margin-bottom: 4px;
		}
		:global(ul) {
			list-style-type: disc;
			list-style-position: inside;
		}
		:global(li) {
			margin: 12px 0;
		}
	}
</style>
