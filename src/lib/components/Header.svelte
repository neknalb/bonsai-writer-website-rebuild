<svelte:options runes={true} />

<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/state'
	import logo from '$lib/images/logo.png'
	const route = $derived(page.route)
</script>

<header class="flex h-20 items-center justify-between px-8 py-8">
	<img src={logo} alt="Bonsai Writer logo" class="h-12" />
	<nav class="flex space-x-4">
		<button
			class={['btn hover:preset-tonal', route.id === '/' ? 'underline' : '']}
			type="button"
			onclick={() => goto('/')}>Home</button
		>
		<button
			class={['btn hover:preset-tonal', route.id === '/whats-new' ? 'underline' : '']}
			type="button"
			onclick={() => goto('/whats-new')}>What's new</button
		>
	</nav>
</header>
