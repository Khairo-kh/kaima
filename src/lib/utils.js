// workaround for using crypto in the browser
let rb = null;

(async () => {
	const { randomBytes } = await import('node:crypto');
	rb = randomBytes;
})();

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
	const id = rb(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
