<script lang="ts">
	import iconScribble from '$lib/images/Bonsai_Scr_Icon.jpg'
	import keyboardScribbleDark from '$lib/images/Bonsai_Scr_Tastatur_DARK.jpg'
</script>

<div class="flex flex-col items-center p-5">
	<picture class="mb-8 h-auto w-50">
		<source srcset={iconScribble} media="(prefers-color-scheme: light)" />
		<source srcset={keyboardScribbleDark} media="(prefers-color-scheme: dark)" />
		<!-- User has no color preference: -->
		<img src={iconScribble} alt="Scribbled B key on a keyboard" />
	</picture>
	<h2 class="mb-8 text-2xl">Alpha Test Phase</h2>
	<!-- <div class="mx-auto flex max-w-2xl flex-col px-4 md:flex-row"> -->
	<div class="max-w-2xl columns-1 gap-6 text-left md:columns-2">
		<p class="mb-4">
			Bonsai Writer is currently in an early stage of development - the Alpha Test Phase. You may
			miss some basic features like footnotes and spell checking, as well as various import and
			export options. All this and much more will be added step by step over the next months.
		</p>
		<p class="mb-4">
			Don't hesitate to share your thoughts about Bonsai Writer with us. What are the most important
			features that make Bonsai Writer your favorite writing program? What do you not like so much?
			What do you particularly like?
		</p>
		<p>
			You have recognized the advantages of Bonsai Writer for working with text documents in your
			company? Feel free to contact us, so we can meet and discuss possibilities together.
		</p>
	</div>
</div>
