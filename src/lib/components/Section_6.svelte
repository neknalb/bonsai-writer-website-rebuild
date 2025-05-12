<script lang="ts">
	import plantScribble from '$lib/images/Bonsai_Scr_Wachstum.jpg'
	import noMoreNewsletterSubscribtions from '$lib/images/Newslettersubscribe_nomore.jpg'
</script>

<div class="flex flex-col items-center p-5">
	<picture class="mb-8 h-auto w-50 dark:hidden">
		<img src={plantScribble} alt="Scribbled B key on a keyboard" />
	</picture>
	<h2 class="mb-8 text-2xl">Watch Bonsai Writer growing</h2>
	<!-- <div class="mx-auto flex max-w-2xl flex-col px-4 md:flex-row"> -->
	<div class="max-w-xl columns-1 text-left">
		<p class="mb-4">
			We publish a newsletter approximately every three weeks. We will inform you about news about
			Bonsai Writer, our website, the team and so on. We are happy if you subscribe to our
			newsletter and look forward to your feedback.
		</p>
	</div>
	<picture class="h-auto max-w-xl">
		<img src={noMoreNewsletterSubscribtions} alt="No more subscribe to newsletter" />
	</picture>
</div>
