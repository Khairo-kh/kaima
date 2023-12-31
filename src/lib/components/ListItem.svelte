<script>
	import { Icon, Trash, Pencil } from 'svelte-hero-icons';
	import Modal from './Modal.svelte';
	import ItemModal from './ItemModal.svelte';
	import { enhance } from '$app/forms';
	export let item = {};
	export let user = {};
	let form;

	let expanded = false;
	let description = item.description;
	let showEditModal = false;
	let showDeleteModal = false;

	$: trimmedDescription =
		description.length > 150 && !expanded ? description.substring(0, 150) + '...' : description;

	function handleEdit() {
		showEditModal = true;
	}

	function handleDelete() {
		showDeleteModal = true;
	}

	function submitForm(e) {
		e.preventDefault();
		showDeleteModal = false;
		form.submit();
	}
</script>

<div class="grid grid-cols-4 gap-4 bg-white shadow-md rounded-lg p-4 my-2 relative">
	<div class="col-span-3">
		<h3 class="text-lg font-bold mb-2">{item.title}</h3>
		<p class="text-gray-700">
			{trimmedDescription}
			{#if description.length > 50}
				<a
					href="#"
					on:click|preventDefault={() => (expanded = !expanded)}
					class="text-blue-500 hover:underline">{expanded ? 'Show less' : 'Read more'}</a
				>
			{/if}
		</p>
	</div>
	{#if item.link}
		<div class="col-span-1 flex items-center justify-end">
			<a href={item.link} class="px-4 py-2 mx-2 btn btn-secondary rounded" target="_blank"
				>{`Visit Link`}</a
			>
			{#if user}
				<button on:click={handleDelete} class="px-4 py-2 mx-2 btn btn-circle"
					><Icon src={Trash} class="w-5 h-5" /></button
				>
				<button on:click={handleEdit} class="px-4 py-2 mx-2 btn btn-circle"
					><Icon src={Pencil} class="w-5 h-5" /></button
				>
			{/if}
		</div>
	{/if}
	{#if showEditModal}
		<ItemModal form={item} on:close={() => (showEditModal = false)} />
	{/if}

	{#if showDeleteModal}
		<Modal label={item.name} checked={showDeleteModal}>
			<div slot="heading">
				<h3 class="text-2xl">Delete {item.name}</h3>
				<p class="text-base font-normal mt-2">
					Are you sure you want to delete this list item? Once deleted, it cannot be restored.
				</p>
			</div>
			<div slot="actions" class="flex w-full items-center justify-center space-x-2">
				<label for={item.id} class="btn btn-outline">Cancel</label>
				<form action="?/deleteListItem" method="POST" bind:this={form} use:enhance>
					<input type="hidden" name="id" value={item.id} />
					<button type="button" class="btn btn-error" on:click={submitForm}>Delete</button>
				</form>
			</div>
		</Modal>
	{/if}
</div>
