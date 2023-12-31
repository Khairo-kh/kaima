// @ts-nocheck
/** @type {import('./$types').PageServerLoad} */
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pocketbase.collection('users').authWithPassword(body.email, body.password);
			if (!locals.pocketbase?.authStore?.model?.verified) {
				locals.pocketbase.authStore.clear();
				return {
					verified: false
				};
			}
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'An error occurred!');
		}

		throw redirect(303, '/my/lists');
	}
};
