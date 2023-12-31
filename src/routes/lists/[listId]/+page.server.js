// @ts-nocheck
import { serializeObj } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
	const getList = async (listId) => {
		try {
			const list = serializeObj(await locals.pocketbase.collection('lists').getOne(listId));
			return list;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	const getItems = async (listId) => {
		try {
			const items = serializeObj(
				await locals.pocketbase.collection('list_item').getFullList(undefined, {
					filter: `list = "${listId}"`
				})
			);
			return items;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	let list = await getList(params.listId);
	let items = await getItems(params.listId);
	let owner = locals.pocketbase?.authStore?.baseModel?.id;

	return {
		list,
		items,
		owner: owner === list.user
	};
};

export const actions = {
	deleteListItem: async ({ request, locals }) => {
		const formData = await request.formData();
		try {
			await locals.pocketbase.collection('list_item').delete(formData.get('id'));
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	},

	updateListItem: async ({ request, locals }) => {
		const formData = await request.formData();
		try {
			await locals.pocketbase.collection('list_item').update(formData.get('id'), {
				title: formData.get('title'),
				description: formData.get('description'),
				link: formData.get('link')
			});
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	},

	createListItem: async ({ request, locals }) => {
		const formData = await request.formData();
		try {
			await locals.pocketbase.collection('list_item').create({
				title: formData.get('title'),
				description: formData.get('description'),
				link: formData.get('link'),
				list: formData.get('listId')
			});
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	}
};
