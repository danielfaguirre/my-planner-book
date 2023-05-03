import { useAuthContext } from "../../contexts/AuthContext";
import {
	addNewNoteService,
	deleteNoteService,
	getNotesService,
	updateNoteService,
} from "../../services/Notes/notes.services";
import NoteCard from "./components/NoteCard";
import { NoteType } from "./models";
import style from "./style.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useCallback, useEffect, useState } from "react";

const Notes = () => {
	const { userId } = useAuthContext()
	const [notes, setNotes] = useState<NoteType[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const getNotes = useCallback(async () => {
		const { data } = await getNotesService(userId);
		setNotes(data);
	}, [userId]);

	const handleAddNote = async () => {
		setLoading(true);
		await addNewNoteService(userId);
		setLoading(false);
		getNotes();
	};

	const handleEditNote = async (noteId: number, newText: string) => {
		if (newText) {
			await updateNoteService(newText, noteId);
			getNotes();
		}
	};

	const handleDeleteNote = async (noteId: number) => {
		await deleteNoteService(noteId);
		getNotes();
	};

	useEffect(() => {
		getNotes();
	}, [getNotes]);

	return (
		<section className={style.noteSection}>
			{notes?.map((note) => (
				<NoteCard
					key={note.id}
					onDeleteNote={() => handleDeleteNote(note.id as number)}
					onEditNote={(newText) => handleEditNote(note.id as number, newText)}
					note={note}
				/>
			))}
			<Button
				loading={loading}
				type="dashed"
				className={style.addButton}
				icon={<PlusOutlined />}
				onClick={() => handleAddNote()}
			>
				Create a new note
			</Button>
		</section>
	);
};

export default Notes;
