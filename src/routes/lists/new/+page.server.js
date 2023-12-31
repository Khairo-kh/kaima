// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (!locals.pocketbase.authStore.isValid) {
		throw redirect(303, '/login');
	}
};

export const actions = {
	create: async ({ request, locals }) => {
		const formData = await request.formData();

		console.log('formData: ', formData);

		const image = formData.get('image');

		if (image.size === 0) {
			formData.delete('image');
		}
		formData.append('user', locals.user.id);
		try {
			await locals.pocketbase.collection('lists').create(formData);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/my/lists');
	}
};
