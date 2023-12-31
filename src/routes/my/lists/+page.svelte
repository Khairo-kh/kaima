<script>
	import { ListEntity } from '$lib/components';
	export let data;
</script>

<h2 class="text-3xl font-bold">My Lists</h2>
<div class="w-full mt-4 flex flex-col items-center">
	{#if data.lists.length === 0}
		<p class="text-center text-3xl">☹️</p>
		<p class="text-center text-3xl">Looks like you don't have any lists.</p>
		<a href="/lists/new" class="btn btn-primary max-w-md mt-4">Add One</a>
	{:else}
		{#each data.lists as list}
			<ListEntity {list} />
			<div class="divider mt-0 mb-2" />
		{/each}
	{/if}
</div>
