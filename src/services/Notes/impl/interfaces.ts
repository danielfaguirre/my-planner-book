import { NoteType } from "../../../components/Notes/models";
import { serviceResponse } from "../../models";

export default interface INotes {
	getNotes: (userId: string) => Promise<serviceResponse<NoteType[]>>;
	addNewNote: (
		userId: string,
		note: NoteType,
	) => Promise<serviceResponse<NoteType>>;
	updateNote: (
		text: { text: string },
		noteId: string | number,
	) => Promise<serviceResponse<NoteType>>;
	deleteNote: (noteId: string | number) => Promise<{ error: string }>;
}
