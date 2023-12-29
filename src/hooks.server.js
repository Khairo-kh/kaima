// @ts-nocheck
import PocketBase from 'pocketbase';
import { serializeObj } from '$lib/utils';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	event.locals.pocketbase = new PocketBase('http://localhost:8090');
	event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pocketbase.authStore.isValid) {
		event.locals.user = serializeObj(event.locals.pocketbase.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set(
		'set-cookie',
		event.locals.pocketbase.authStore.exportToCookie({ secure: false })
	);

	return response;
};
