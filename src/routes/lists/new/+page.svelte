<script>
	import { enhance } from '$app/forms';
	import { Input, ItemModal, ListItem } from '$lib/components';

	let items = [];
	let showModal = false;

	function add(event) {
		items = [...items, event.detail];
		showModal = false;
	}
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance
		>
			<h3 class="text-3xl font-bold">Add more details about this list</h3>
			<p class="mt-2 text-lg">We'll need the name, description, image, and list items</p>
			<Input id="name" label="List name" />

			<div class="form-control w-full max-w-lg">
				<label for="description" class="label font-medium pb-1">
					<span class="label-text">List description</span>
				</label>
				<textarea name="description" class="textarea textarea-bordered h-24 resize-none" />
			</div>
			<div class="form-control w-full max-w-lg">
				<label for="image" class="label font-medium pb-1">
					<span class="label-text">Image</span>
				</label>
				<input
					type="file"
					name="image"
					id="image"
					class="file-input file-input-bordered w-full max-w-lg"
				/>
			</div>

			<div class="form-control w-full max-w-lg">
				{#each items as item, index (index)}
					<ListItem {item} />
				{/each}
			</div>

			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">Create List</button>
			</div>
		</form>
	</div>
</div>
