<svelte:options runes={true} />

<script lang="ts">
    import logo from '$lib/images/logo.png'
</script>

<header class="bg-white py-4 px-8 border-b-1 relative h-20">
    <img src={logo} alt="Bonsai Writer logo" class="inline-block h-12 absolute left-8"/>
    <div class="inline-block absolute right-8 top-7">
        <a href="/">Home</a> | <a href="/whats-new">What's new?</a>
    </div>
</header>