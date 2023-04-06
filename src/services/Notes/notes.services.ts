import { NoteColors } from "../../components/Notes/constants";
import { NoteType } from "../../components/Notes/models";
import { getRandomNoteColor } from "../../components/Notes/utils";
import { SERVER_ROUTE } from "../../config";
import * as Service from "../service";

const ENDPOINT = `${SERVER_ROUTE}/notes`;

export const getNotesService = () => {
	return Service.getData<NoteType[]>(`${ENDPOINT}`);
};

export const addNewNoteService = () => {
	const payLoad = {
		text: "",
		color: getRandomNoteColor(NoteColors),
	};
	return Service.postData(ENDPOINT, payLoad);
};

export const updateNoteService = (newText: string, noteId: number) => {
	const payLoad = {
		text: newText,
	};
	return Service.patchData(ENDPOINT, payLoad, noteId);
};

export const deleteNoteService = (noteId: number) => {
	return Service.deleteData(ENDPOINT, noteId);
};
