<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import '../app.css'
	import type { Snippet } from 'svelte'

	const { children }: { children: Snippet } = $props()
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />
