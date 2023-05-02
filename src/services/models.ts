import { DocumentData } from "firebase/firestore";

export type serviceResponse<T> = {
	data: T | null;
	error?: string;
};

export type FirebaseResponseItemType = {
	document: DocumentData & { id: string };
};

export type FirebaseResponseType = {
	data?: FirebaseResponseItemType[];
	error?: string;
};
