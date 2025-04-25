<script lang="ts">
	import Section_1 from '$lib/components/Section_1.svelte'
	import Section_2 from '$lib/components/Section_2.svelte'
	import Slide from '$lib/components/Slide.svelte'
	import slide1BackgroundImage from '$lib/images/IMG_Idea.jpg'
</script>

<section class="mb-12">
	<Section_1 />
</section>

<section class="mb-12">
	<Section_2 />
</section>

<section class="mb-12">
	<Slide
		backgroundImage={slide1BackgroundImage}
		claim="Plant your idea"
		subline="Let your ideas become text. Without obstacles."
	/>
</section>
