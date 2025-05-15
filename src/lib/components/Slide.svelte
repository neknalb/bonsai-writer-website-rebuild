<script lang="ts">
	const { backgroundImage, claim, subline } = $props()
</script>

<div
	class="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-center"
	style="background-image: url('{backgroundImage}')"
>
	<h1 class="text-3xl text-white md:text-5xl">{claim}</h1>
	<p class="text-lg text-white md:text-xl">{subline}</p>
</div>
