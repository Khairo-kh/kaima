import { randomBytes } from 'crypto';

/**
 *
 * @param {Object} obj
 * @returns
 */
export const serializeObj = (obj) => {
	return structuredClone(obj);
};

/**
 *
 * @param {string} name
 * @returns
 */
export const generateUsername = (name) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};
