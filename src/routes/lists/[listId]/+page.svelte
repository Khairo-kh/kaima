<script>
	import ListItem from '$lib/components/ListItem.svelte';
	import { Icon, Plus, Link } from 'svelte-hero-icons';
	import { getImageURL } from '$lib/utils';
	import ItemModal from '$lib/components/ItemModal.svelte';
	export let data;
	let showCreateModal = false;
	let item = { description: '', title: '', link: '', listId: data.list.id };

	function copyLink() {
		navigator.clipboard.writeText(window.location.href);
	}
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

	<div class="flex justify-between items-start">
		<div>
			<h1 class="text-4xl font-bold mt-8">{data.list.name}</h1>
			<p class="text-2xl font-light mt-2">{data.list.description}</p>
		</div>
		<div class="mt-9 mr-5">
			{#if data?.user?.id}
				<button
					class="btn btn-primary"
					on:click={() => {
						showCreateModal = true;
					}}
				>
					<Icon src={Plus} class="h-6 w-6" />
				</button>
			{/if}
			<button class="btn btn-secondary ml-2" on:click={copyLink}>
				<Icon class="h-6 w-6" src={Link} />
			</button>
		</div>
	</div>
	<div class="divider mt-2 mb-2" />

	<div>
		{#each data.items as listItem}
			<ListItem item={listItem} user={data.owner} />
		{/each}
	</div>

	{#if showCreateModal}
		<ItemModal form={item} on:close={() => (showCreateModal = false)} />
	{/if}
</div>
