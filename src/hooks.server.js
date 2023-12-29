// @ts-nocheck
import { serializeObj } from '$lib/utils';
import Pocketbase from 'pocketbase';

export const handler = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase('http://localhost:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeObj(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
