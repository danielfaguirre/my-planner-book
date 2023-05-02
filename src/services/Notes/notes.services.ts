import { NoteColors } from "../../components/Notes/constants";
import { NoteType } from "../../components/Notes/models";
import { getRandomNoteColor } from "../../components/Notes/utils";
import { CollectionsEnum } from "../APIProviders/models";
import { getProvider } from "../APIProviders/utils";
import INotes from "./impl/interfaces";

const provider = getProvider(CollectionsEnum.NOTES) as INotes;

export const getNotesService = () => {
	return provider.getNotes();
};

export const addNewNoteService = () => {
	const note: NoteType = {
		text: "",
		color: getRandomNoteColor(NoteColors),
	};
	return provider.addNewNote(note);
};

export const updateNoteService = (text: string, noteId: number) => {
	return provider.updateNote({ text }, noteId);
};

export const deleteNoteService = (noteId: number) =>
	provider.deleteNote(noteId);
