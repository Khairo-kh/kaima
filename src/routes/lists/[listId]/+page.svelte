<script>
	import ListItem from '$lib/components/ListItem.svelte';
	import { getImageURL } from '$lib/utils';
	export let data;
</script>

<div class="flex flex-col w-full mt-4">
	<div class="avatar">
		<div class="w-full h-96 rounded">
			<img
				src={data.list?.image
					? getImageURL(data.list.collectionId, data.list.id, data.list.image, '280x280')
					: `https://placehold.co/800?text=${data.user.name}&font=lato`}
				alt="list thumbnail"
			/>
		</div>
	</div>
	<h1 class="text-4xl font-bold mt-8">
		{data.list.name}
	</h1>
	<p class="text-2xl font-light mt-2">{data.list.description}</p>
	<div class="divider mt-2 mb-2" />

	<div>
		{#each data.items as listItem}
			<ListItem item={listItem} user={data.owner} />
		{/each}
	</div>
</div>
