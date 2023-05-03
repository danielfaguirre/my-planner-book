import { db } from "../../config/firebase";
import { FirebaseResponseItemType, FirebaseResponseType } from "../models";
import { CollectionsEnum } from "./models";
import {
	DocumentData,
	QueryFieldFilterConstraint,
	WithFieldValue,
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	updateDoc,
} from "firebase/firestore";

export const getData = async (
	collectionName: CollectionsEnum,
	filters?: QueryFieldFilterConstraint[],
): Promise<FirebaseResponseType> => {
	let data: FirebaseResponseItemType[] = [];

	const q = !filters
		? collection(db, collectionName)
		: query(collection(db, collectionName), ...filters);

	try {
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			const item: FirebaseResponseItemType = {
				document: { ...doc.data(), id: doc.id },
			};
			data = [...data, item];
		});

		return { data };
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		return { error: error.message };
	}
};

export const postData = async (
	collectionName: CollectionsEnum,
	data: WithFieldValue<DocumentData>,
): Promise<FirebaseResponseType> => {
	try {
		const docRef = await addDoc(collection(db, collectionName), data);
		let dataResponse: FirebaseResponseItemType[] = [
			{
				document: { ...data, id: docRef.id },
			},
		];
		return { data: dataResponse };
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		return { error: error.message };
	}
};

export const patchData = async (
	collectionName: CollectionsEnum,
	data: WithFieldValue<DocumentData>,
	id: string,
): Promise<FirebaseResponseType> => {
	try {
		const docRef = doc(db, collectionName, id);
		await updateDoc(docRef, data);
		return {};
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		return { error: error.message };
	}
};

export const deleteData = async (
	collectionName: CollectionsEnum,
	id: string,
): Promise<FirebaseResponseType> => {
	try {
		await deleteDoc(doc(db, collectionName, id));
		return { error: "" };
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		return { error: error.message };
	}
};
