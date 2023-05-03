import { StorageEnum } from "./models";

const set = <T,>(key: string, data: T) => {
	const jsonData = JSON.stringify(data);
	localStorage.setItem(key, jsonData);
};

const get = <T,>(key: StorageEnum) => {
	const data = localStorage.getItem(key);
	if (data) {
		return JSON.parse(data) as T;
	}
	return null;
};

const remove = (key: StorageEnum) => {
	localStorage.removeItem(key);
};

const storage = {
	set,
	get,
	remove,
};

export default storage;
