// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */

export const POST = ({ locals }) => {
	locals.pocketbase.authStore.clear();
	locals.user = undefined;

	throw redirect(303, '/login');
};
