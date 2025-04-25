<script lang="ts">
	import Section_1 from '$lib/components/Section_1.svelte'
	import Section_2 from '$lib/components/Section_2.svelte'
	import Section_4 from '$lib/components/Section_4.svelte'
	import Section_6 from '$lib/components/Section_6.svelte'
	import Section_8 from '$lib/components/Section_8.svelte'
	import Slide from '$lib/components/Slide.svelte'
	import slide1BackgroundImage from '$lib/images/IMG_Idea.jpg'
	import slide2BackgroundImage from '$lib/images/IMG_Evolve.jpg'
	import slide3BackgroundImage from '$lib/images/IMG_Show.jpg'
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

<section class="mb-12">
	<Section_4 />
</section>

<section class="mb-12">
	<Slide
		backgroundImage={slide2BackgroundImage}
		claim="Evolve and structure"
		subline="Develop and structure your text. Effortless."
	/>
</section>

<section class="mb-12">
	<Section_6 />
</section>

<section class="mb-12">
	<Slide
		backgroundImage={slide3BackgroundImage}
		claim="Show it to the world"
		subline="Publish your text in many formats. Perfectly styled."
	/>
</section>

<section class="mb-12">
	<Section_8 />
</section>
