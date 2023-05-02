import { NoteType } from "../../../components/Notes/models";
import * as Service from "../../APIProviders/firebaseService";
import { CollectionsEnum } from "../../APIProviders/models";
import { serviceResponse } from "../../models";
import INotes from "./interfaces";

const collectionName = CollectionsEnum.NOTES;

export default class NotesFirebaseImpl implements INotes {
	getNotes = async (): Promise<serviceResponse<NoteType[]>> => {
		const firebaseResponse = await Service.getData(collectionName);
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

	addNewNote = async (note: NoteType): Promise<serviceResponse<NoteType>> => {
		const firebaseResponse = await Service.postData(collectionName, note);
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
