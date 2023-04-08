import { NoteType } from "../../models";
import EditableNote from "../EditableNote";
import ReadOnlyNote from "../ReadOnlyNote";
import { useState } from "react";

export type NoteCardType = {
	note: NoteType;
	onEditNote: (newText: string) => void;
	onDeleteNote: () => void;
};

const NoteCard = ({ note, onEditNote, onDeleteNote }: NoteCardType) => {
	const [text, setText] = useState(note.text);
	const [isEditable, setIsEditable] = useState(false);
	const handleEditNote = (newText: string) => {
		onEditNote(newText);
		setIsEditable(false);
	};
	return (
		<div>
			{isEditable ? (
				<EditableNote
					noteColor={note.color}
					text={text}
					setText={setText}
					onEditNote={handleEditNote}
				/>
			) : (
				<ReadOnlyNote
					noteColor={note.color}
					onEdit={() => setIsEditable(true)}
					onDeleteNote={onDeleteNote}
					text={text}
				/>
			)}
		</div>
	);
};

export default NoteCard;
