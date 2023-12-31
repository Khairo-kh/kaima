// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';
import { serializeObj } from '$lib/utils';

export const load = async ({ locals }) => {
	if (!locals.pocketbase.authStore.isValid) {
		throw redirect(303, '/login');
	}

	const getUsersLists = async (userId) => {
		try {
			const lists = serializeObj(
				await locals.pocketbase.collection('lists').getFullList(undefined, {
					filter: `user = "${userId}"`
				})
			);
			return lists;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		lists: await getUsersLists(locals.user.id)
	};
};

export const actions = {
	deleteList: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData());

		try {
			await locals.pocketbase.collection('lists').delete(id);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
