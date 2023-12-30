// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = ({ locals }) => {
	if (!locals.pocketbase.authStore.isValid) {
		throw redirect(303, '/login');
	} else {
		throw redirect(303, '/my/settings/profile');
	}
};
