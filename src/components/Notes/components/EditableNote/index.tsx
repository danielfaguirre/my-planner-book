import style from "./style.module.css";
import { Input } from "antd";
import { useRef } from "react";

export type EditableNoteType = {
	text: string;
	setText: (text: string) => void;
	onEditNote: (newText: string) => void;
};

const EditableNote = ({ text, setText, onEditNote }: EditableNoteType) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	return (
		<Input.TextArea
			style={{ backgroundColor: "aqua" }}
			autoFocus
			ref={textAreaRef}
			value={text}
			onBlur={() => onEditNote(text)}
			onChange={(e) => setText(e.target.value)}
			className={style.newNote}
			rows={8}
		/>
	);
};

export default EditableNote;
