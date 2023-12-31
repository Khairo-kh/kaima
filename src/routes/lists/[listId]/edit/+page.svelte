<script>
	import { enhance } from '$app/forms';
	import { Icon, Trash } from 'svelte-hero-icons';
	import { Input } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	export let data;
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			method="POST"
			action="?/updateList"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance
		>
			<h3 class="text-3xl font-bold">Edit {data.list.name}</h3>
			<Input id="name" label="Project name" value={data.list.name ?? ''} />
			<div class="form-control w-full max-w-lg">
				<label for="decription" class="label font-medium pb-1">
					<span class="label-text">Project description</span>
				</label>
				<textarea
					name="description"
					class="textarea textarea-bordered h-24 resize-none"
					value={data.list.description ?? ''}
				/>
			</div>
			<div class="form-control w-full max-w-lg">
				<label for="image" class="label font-medium pb-1">
					<span class="label-text">List Image</span>
				</label>
				{#if data.list.image}
					<label for="image" class="avatar w-20 hover:cursor-pointer">
						<label for="image" class="absolute -top-1.5 -right-1.5 hover:cursor-pointer">
							<button formaction="?/deleteImage" class="btn btn-error btn-sm btn-circle">
								<Icon src={Trash} class="w-5 h-5 text-white" />
							</button>
						</label>
						<div class="w-20 rounded">
							<img
								src={data.list.image
									? getImageURL(data.list.collectionId, data.list.id, data.list.image, '80x80')
									: `https://placehold.co/800?text=${data.user.name}&font=lato`}
								alt="list thumbnail"
							/>
						</div>
					</label>
				{/if}
				<input
					type="file"
					name="image"
					id="image"
					class="file-input file-input-bordered w-full max-w-lg mt-2"
				/>
			</div>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">Save Changes</button>
			</div>
		</form>
	</div>
</div>
