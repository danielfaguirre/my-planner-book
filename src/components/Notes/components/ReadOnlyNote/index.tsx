import { getNoteFontSize } from "../../utils";
import BadgeCloseButton from "../BadgeCloseButton";
import style from "./style.module.css";
import { useState } from "react";

export type ReadOnlyNoteType = {
	text: string;
	noteColor: string;
	onEdit: () => void;
	onDeleteNote: () => void;
};

const ReadOnlyNote = ({
	text,
	noteColor,
	onEdit,
	onDeleteNote,
}: ReadOnlyNoteType) => {
	const [showCloseButton, setShowCloseButton] = useState(false);

	return (
		<div
			onMouseEnter={() => setShowCloseButton(true)}
			onMouseLeave={() => setShowCloseButton(false)}
			onDoubleClick={onEdit}
			style={{ backgroundColor: noteColor }}
			className={style.readOnlyNote}
		>
			<BadgeCloseButton onClick={onDeleteNote} showButton={showCloseButton}>
				<section
					style={{ fontSize: getNoteFontSize(text) }}
					className={style.noteText}
				>
					{text}
				</section>
			</BadgeCloseButton>
		</div>
	);
};

export default ReadOnlyNote;
