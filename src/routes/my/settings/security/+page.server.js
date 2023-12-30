// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	updatePassword: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pocketbase.collection('users').update(locals.user.id, data);
			locals.pocketbase.authStore.clear();
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/login');
	}
};
