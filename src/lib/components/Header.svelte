<svelte:options runes={true} />

<script lang="ts">
	import { page } from '$app/state'
	import logo from '$lib/images/logo.png'
	let route = $derived(page.route)
</script>

<header class="relative h-20 border-b-1 bg-white px-8 py-4">
	<img src={logo} alt="Bonsai Writer logo" class="absolute left-10 inline-block h-12" />
	<div class="absolute top-7 right-10 flex space-x-4">
		<a href="/" class={route.id === '/' ? 'text-primary-500' : 'text-gray-700'}>Home</a>
		<a href="/whats-new" class={route.id === '/whats-new' ? 'text-primary-500' : 'text-gray-700'}>What's new</a>
	</div>
</header>
