import { Card } from "antd";
import { ToDoListItemType } from "./components/models";
import NewToDoForm from "./components/NewToDoForm";
import ToDoList from "./components/ToDoList";

const ToDo = () => {
	const handleAddNewToDo = (toDo: string) => {
		/**
		 * ToDo:
		 * Created new ToDo
		 */
		console.log("Adding new ToDo...", toDo);
	};

	const handleCheck = (item: ToDoListItemType, isChecked: boolean) => {
		if (isChecked) {
			console.log("Task completed...", item.label);
		} else {
			console.log("Task incompleted...", item.label);
		}
	};

	const handleDelete = (item: ToDoListItemType) => {
		console.log("Deleting...", item.label);
	};

	return (
		<Card title="To do">
			<ToDoList onCheck={handleCheck} onDelete={handleDelete} />
			<NewToDoForm onAddNewToDo={handleAddNewToDo} />
		</Card>
	);
};

export default ToDo;
