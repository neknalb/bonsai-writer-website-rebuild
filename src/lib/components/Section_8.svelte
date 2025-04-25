<script lang="ts">
	import laptopScribble from '$lib/images/Bonsai_Scr_Laptop.jpg'
	import keyboardScribbleDark from '$lib/images/Bonsai_Scr_Tastatur_DARK.jpg'
	import noMoreDownload from '$lib/images/Download_nomore.jpg'
</script>

<div class="flex flex-col items-center p-5">
	<picture class="mb-8 h-auto w-50">
		<source srcset={laptopScribble} media="(prefers-color-scheme: light)" />
		<source srcset={keyboardScribbleDark} media="(prefers-color-scheme: dark)" />
		<!-- User has no color preference: -->
		<img src={laptopScribble} alt="Scribbled B key on a keyboard" />
	</picture>
	<h2 class="mb-8 text-2xl">Get to know Bonsai Writer</h2>
	<!-- <div class="mx-auto flex max-w-2xl flex-col px-4 md:flex-row"> -->
	<div class="max-w-xl columns-1 text-left">
		<p class="mb-4">
			You can try and get to know Bonsai Writer for free. Discover for yourself what makes writing
			with Bonsai Writer such a great experience.
		</p>
	</div>
	<picture class="h-auto max-w-xl">
		<img src={noMoreDownload} alt="You can no more dowload the app" />
	</picture>
</div>
