import NoteCard from "./components/NoteCard";
import { NoteType } from "./models";
import style from "./style.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useCallback, useEffect, useState } from "react";

const Notes = () => {
	const [notes, setNotes] = useState<NoteType[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const getNotes = useCallback(async () => {
		try {
			const response = await fetch("http://localhost:3001/notes");
			const responseJson = await response.json();
			setNotes(responseJson);
		} catch (error) {
			setNotes([]);
			console.log(error);
		}
	}, []);

	const handleAddNote = async () => {
		setLoading(true);
		const data: NoteType = {
			text: "",
		};
		const body = JSON.stringify(data);
		const response = await fetch("http://localhost:3001/notes", {
			method: "POST",
			body,
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.status === 201) setLoading(false);
		getNotes();
	};

	const handleEditNote = async (noteId: number, newText: string) => {
		if (newText) {
			const body = JSON.stringify({ text: newText });
			await fetch(`http://localhost:3001/notes/${noteId}`, {
				method: "PATCH",
				body,
				headers: {
					"Content-Type": "application/json",
				},
			});
			getNotes();
		}
	};

	const handleDeleteNote = async (noteId: number) => {
		await fetch(`http://localhost:3001/notes/${noteId}`, {
			method: "DELETE",
		});
		getNotes();
	};

	useEffect(() => {
		getNotes();
	}, [getNotes]);

	return (
		<section className={style.noteSection}>
			{notes?.map((note) => (
				<NoteCard
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
