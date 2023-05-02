import { NoteType } from "../../../components/Notes/models";
import { SERVER_ROUTE } from "../../../config";
import * as Service from "../../APIProviders/jsonServerService";
import { CollectionsEnum } from "../../APIProviders/models";
import { serviceResponse } from "../../models";
import INotes from "./interfaces";

const ENDPOINT = `${SERVER_ROUTE}/${CollectionsEnum.NOTES}`;

export default class NotesJsonServerImpl implements INotes {
	getNotes = (): Promise<serviceResponse<NoteType[]>> => {
		return Service.getData<NoteType[]>(`${ENDPOINT}`);
	};

	addNewNote = (note: NoteType): Promise<serviceResponse<NoteType>> => {
		return Service.postData<NoteType, NoteType>(ENDPOINT, note);
	};

	updateNote = (
		text: { text: string },
		noteId: string | number,
	): Promise<serviceResponse<NoteType>> => {
		return Service.patchData<NoteType, { text: string }>(
			ENDPOINT,
			text,
			noteId,
		);
	};

	deleteNote = (noteId: string | number): Promise<{ error: string }> => {
		return Service.deleteData(ENDPOINT, noteId);
	};
}
