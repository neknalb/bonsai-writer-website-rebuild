<script lang="ts">
	import keyboardScribble from '$lib/images/Bonsai_Scr_Tastatur.jpg'
	import keyboardScribbleDark from '$lib/images/Bonsai_Scr_Tastatur_DARK.jpg'
	import screenshot from '$lib/images/Screenshot_Das_Jahr_2017.png'
</script>

<div class="flex flex-col items-center p-5 text-left">
	<picture class="mb-5 h-auto w-50">
		<source srcset={keyboardScribble} media="(prefers-color-scheme: light)" />
		<source srcset={keyboardScribbleDark} media="(prefers-color-scheme: dark)" />
		<!-- User has no color preference: -->
		<img src={keyboardScribble} alt="Scribbled B key on a keyboard" />
	</picture>
	<h1 class="mb-4 text-2xl font-bold">Text writing as it should be</h1>
	<div class="mx-auto flex max-w-2xl flex-col px-4 md:flex-row">
		<div class="mb-4 w-full md:mb-0 md:w-2/3">
			<img src={screenshot} alt="Christmas eve party 2017" class="h-auto w-full object-cover" />
		</div>
		<div class="w-full md:w-1/3">
			<p class="mb-4">
				With the text writing application Bonsai Writer you can turn your thoughts into text
				unhindered. You don't have to worry about formatting, you can enjoy perfectly designed
				results.
			</p>
			<p>
				Structuring your text with Bonsai Writer is easy and clear, whether you want to emphasize a
				word, or create a headline or quote. With just one click you can move a list, an image with
				its title, or even an entire chapter.
			</p>
		</div>
	</div>
</div>
