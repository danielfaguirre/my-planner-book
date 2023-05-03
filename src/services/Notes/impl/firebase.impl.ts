import { NoteType } from "../../../components/Notes/models";
import * as Service from "../../APIProviders/firebaseService";
import { CollectionsEnum } from "../../APIProviders/models";
import { serviceResponse } from "../../models";
import INotes from "./interfaces";
import { where } from "firebase/firestore";

const collectionName = CollectionsEnum.NOTES;

export default class NotesFirebaseImpl implements INotes {
	getNotes = async (userId: string): Promise<serviceResponse<NoteType[]>> => {
		const filters = [where("userId", "==", userId)];
		const firebaseResponse = await Service.getData(collectionName, filters);
		const adapter = firebaseResponse?.data?.map((item) => {
			return {
				id: item.document.id,
				text: item.document?.text,
				color: item.document?.color,
			} as NoteType;
		});
		return {
			data: adapter || null,
			error: firebaseResponse.error,
		};
	};

	addNewNote = async (
		userId: string,
		note: NoteType,
	): Promise<serviceResponse<NoteType>> => {
		const payLoad = { ...note, userId };
		const firebaseResponse = await Service.postData(collectionName, payLoad);
		return {
			data: null,
			error: firebaseResponse.error,
		};
	};

	updateNote = async (
		text: { text: string },
		noteId: string | number,
	): Promise<serviceResponse<NoteType>> => {
		const firebaseResponse = await Service.patchData(
			collectionName,
			text,
			noteId as string,
		);

		return {
			data: null,
			error: firebaseResponse.error,
		};
	};

	deleteNote = async (noteId: string | number): Promise<{ error: string }> => {
		const firebaseResponse = await Service.deleteData(
			collectionName,
			noteId as string,
		);
		return {
			error: firebaseResponse.error as string,
		};
	};
}
