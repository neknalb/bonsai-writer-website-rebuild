<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import '../app.css'

	let { children } = $props()
</script>

<Header />
<main class="bg-surface-50 text-surface-950 space-y-4 p-4">
	{@render children()}
</main>
<Footer />
