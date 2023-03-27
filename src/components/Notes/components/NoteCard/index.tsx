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
	const [isEditable, setIsEditable] = useState(true);
	const handleEditNote = (newText: string) => {
		onEditNote(newText);
		setIsEditable(false);
	};
	return (
		<div>
			{isEditable ? (
				<EditableNote
					text={text}
					setText={setText}
					onEditNote={handleEditNote}
				/>
			) : (
				<ReadOnlyNote
					onEdit={() => setIsEditable(true)}
					onDeleteNote={onDeleteNote}
					text={text}
				/>
			)}
		</div>
	);
};

export default NoteCard;
