import { ToDoListItemType } from "../../models";
import ToDoItem from "../ToDoItem";
import style from "./style.module.css";

export type ToDoListType = {
	toDos: ToDoListItemType[] | null;
	onCheck: (item: ToDoListItemType, isChecked: boolean) => void;
	onDelete: (item: ToDoListItemType) => void;
};

const ToDoList = ({ toDos, onCheck, onDelete }: ToDoListType) => {
	return (
		<div className={style.cardBody}>
			{toDos?.map((item) => (
				<ToDoItem
					onCheck={onCheck}
					onDelete={onDelete}
					key={item.id}
					item={item}
				/>
			))}
		</div>
	);
};

export default ToDoList;
