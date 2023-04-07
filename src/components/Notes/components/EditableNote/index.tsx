import style from "./style.module.css";
import { Input } from "antd";
import { useRef } from "react";

export type EditableNoteType = {
	text: string;
	noteColor: string;
	setText: (text: string) => void;
	onEditNote: (newText: string) => void;
};

const EditableNote = ({
	text,
	noteColor,
	setText,
	onEditNote,
}: EditableNoteType) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const NOTE_MAX_LENGTH = 220;
	return (
		<>
			<Input.TextArea
				style={{ backgroundColor: noteColor }}
				autoFocus
				ref={textAreaRef}
				value={text}
				onBlur={() => onEditNote(text)}
				onChange={(e) => setText(e.target.value)}
				className={style.newNote}
				rows={7}
				maxLength={NOTE_MAX_LENGTH}
			/>
			<span className={style.charsCounter}>
				{text.length} / {NOTE_MAX_LENGTH}
			</span>
		</>
	);
};

export default EditableNote;
