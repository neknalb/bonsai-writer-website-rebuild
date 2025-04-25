<script lang="ts">
	let { backgroundImage, claim, subline } = $props()
</script>

<div
	class="flex h-100 w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-center"
	style="background-image: url('{backgroundImage}')"
>
	<h1 class="text-2xl text-white">{claim}</h1>
	<p class="text-m text-white">{subline}</p>
</div>
