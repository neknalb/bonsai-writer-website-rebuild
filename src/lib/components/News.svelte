<script lang="ts">
	const { date, title, content } = $props()
</script>

<div class="my-4">
	<h3 class="text-xl font-bold">{title}</h3>
	<small>{date}</small>
	<p class="text-base">{content}</p>
</div>
