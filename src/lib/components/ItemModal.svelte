<script>
	import { createEventDispatcher } from 'svelte';
	import { Input } from '$lib/components';

	export let form;

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}
</script>

<div
	class="fixed z-10 inset-0 overflow-y-auto"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div class="flex items-center justify-center min-h-screen">
		<div
			class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
			aria-hidden="true"
		></div>
		<div
			class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
		>
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
					Add a new list item
				</h3>
				<form
					class="mt-2"
					method="POST"
					action={form?.id ? '?/updateListItem' : '?/createListItem'}
				>
					<div class="mb-3">
						<label for="title" class="block text-sm font-medium text-gray-700">Title</label>
						<input
							type="text"
							class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							id="title"
							name="title"
							bind:value={form.title}
						/>
					</div>
					<div class="mb-3">
						<label for="description" class="block text-sm font-medium text-gray-700"
							>Description</label
						>
						<input
							type="text"
							class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							id="description"
							name="description"
							bind:value={form.description}
						/>
					</div>
					<div class="mb-3">
						<label for="link" class="block text-sm font-medium text-gray-700">Link</label>
						<input
							type="text"
							class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							id="link"
							name="link"
							bind:value={form.link}
						/>
					</div>
					<div class="mb-3 hidden">
						<label for="link" class="block text-sm font-medium text-gray-700">Link</label>
						<input
							type="text"
							class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							id="id"
							name="id"
							bind:value={form.id}
						/>
					</div>
					{#if form.listId}
						<div class="mb-3 hidden">
							<label for="link" class="block text-sm font-medium text-gray-700">Link</label>
							<input
								type="text"
								class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								id="listId"
								name="listId"
								bind:value={form.listId}
							/>
						</div>
					{/if}
					<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button type="submit" class="btn btn-primary m-3">Add</button>
						<button type="button" class="btn btn-secondary my-3" on:click={close}>Cancel</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
