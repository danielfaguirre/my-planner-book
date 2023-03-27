import BadgeCloseButton from "../BadgeCloseButton";
import style from "./style.module.css";
import { useState } from "react";

export type ReadOnlyNoteType = {
	text: string;
	onEdit: () => void;
	onDeleteNote: () => void;
};

const ReadOnlyNote = ({ text, onEdit, onDeleteNote }: ReadOnlyNoteType) => {
	const [showCloseButton, setShowCloseButton] = useState(false);

	return (
		<div
			onMouseEnter={() => setShowCloseButton(true)}
			onMouseLeave={() => setShowCloseButton(false)}
			onDoubleClick={onEdit}
			style={{ backgroundColor: "aqua" }}
			className={style.readOnlyNote}
		>
			<BadgeCloseButton onClick={onDeleteNote} showButton={showCloseButton}>
				<section className={style.noteText}>{text}</section>
			</BadgeCloseButton>
		</div>
	);
};

export default ReadOnlyNote;
