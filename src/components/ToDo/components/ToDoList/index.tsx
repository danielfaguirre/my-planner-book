import ToDoItem from "../ToDoItem";
import { ToDoListItemType } from "../models";
import style from "./style.module.css";

export type ToDoListType = {
	toDos: ToDoListItemType[] | null;
	onCheck: (item: ToDoListItemType, isChecked: boolean) => void;
	onDelete: (item: ToDoListItemType) => void;
};

const ToDoList = ({ toDos, onCheck, onDelete }: ToDoListType) => {
	if (toDos === null) {
		return <>Loading...</>;
	}
	return (
		<div className={style.cardBody}>
			{toDos?.map((item) => (
				<ToDoItem
					onCheck={onCheck}
					onDelete={onDelete}
					key={item.value}
					item={item}
				/>
			))}
		</div>
	);
};

export default ToDoList;
