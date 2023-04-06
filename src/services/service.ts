export type ToDoServiceType<T> = {
	data: T | null;
	error?: string;
};

export const getData = async <T>(url: string): Promise<ToDoServiceType<T>> => {
	const response = await fetch(url);
	if (response.status !== 200) {
		return { data: null, error: response.statusText };
	} else {
		const data = (await response.json()) as T;
		return { data };
	}
};

export const postData = async <T, U>(
	url: string,
	payLoad: U,
): Promise<ToDoServiceType<T>> => {
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(payLoad),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.status !== 201) {
		return { data: null, error: response.statusText };
	} else {
		const data = (await response.json()) as T;
		return { data };
	}
};

export const patchData = async <T, U>(
	url: string,
	payLoad: U,
	id: number | string,
): Promise<ToDoServiceType<T>> => {
	const response = await fetch(`${url}/${id}`, {
		method: "PATCH",
		body: JSON.stringify(payLoad),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.status !== 200) {
		return { data: null, error: response.statusText };
	} else {
		const data = (await response.json()) as T;
		return { data };
	}
};

export const deleteData = async (url: string, id: number | string) => {
	const response = await fetch(`${url}/${id}`, {
		method: "DELETE",
	});
	if (response.status !== 200) {
		return { error: response.statusText };
	}
	return {};
};
