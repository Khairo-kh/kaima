// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';
import { serializeObj } from '$lib/utils';

export const load = async ({ locals, params }) => {
	if (!locals.pocketbase.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	try {
		const list = serializeObj(await locals.pocketbase.collection('lists').getOne(params.listId));

		if (locals.user.id === list.user) {
			return {
				list
			};
		} else {
			throw error(403, 'Forbidden');
		}
	} catch (err) {
		console.log('Error: ', err);
		throw error(err.status, err.message);
	}
};

export const actions = {
	updateList: async ({ request, locals, params }) => {
		const formData = await request.formData();

		const image = formData.get('image');

		if (image.size === 0) {
			formData.delete('image');
		}

		try {
			await locals.pocketbase.collection('lists').update(params.listId, formData);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/my/lists`);
	},

	deleteImage: async ({ locals, params }) => {
		try {
			await locals.pocketbase.collection('lists').update(params.listId, { image: null });
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
