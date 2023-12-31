<script>
	import { enhance } from '$app/forms';
	import { Modal } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	export let list;

	let modalOpen;

	$: modalOpen = false;
</script>

<div class="w-full h-28 flex items-center justify-between">
	<div class="avatar">
		<div class="w-20 rounded">
			<img
				src={list?.image
					? getImageURL(list.collectionId, list.id, list.image, '120x120')
					: `https://placehold.co/800?text=${list.name}&font=lato`}
				alt="list thumbnail"
			/>
		</div>
	</div>
	<div class="flex flex-col w-full ml-4 h-full justify-center">
		<a href="/lists/{list.id}" class="font-semibold text-lg">{list.name}</a>
		<p>{list.description}</p>
	</div>
	<div class="flex items-center justify-end w-full">
		<a href="/lists/{list.id}/edit" class="btn btn-outline">Edit List</a>
		<Modal label={list.id} checked={modalOpen}>
			<span slot="trigger" class="btn btn-error ml-2">Delete</span>
			<div slot="heading">
				<h3 class="text-2xl">Delete {list.name}</h3>
				<p class="text-base font-normal mt-2">
					Are you sure you want to delete this list? Once deleted, the list cannot be restored.
				</p>
			</div>
			<div slot="actions" class="flex w-full items-center justify-center space-x-2">
				<label for={list.id} class="btn btn-outline">Cancel</label>
				<form action="?/deleteList" method="POST" use:enhance>
					<input type="hidden" name="id" value={list.id} />
					<button type="submit" class="btn btn-error">Delete</button>
				</form>
			</div>
		</Modal>
	</div>
</div>
