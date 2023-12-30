// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export const load = ({ locals }) => {
	if (!locals.pocketbase.authStore.isValid) {
		throw redirect(303, '/login');
	}
};
