import NewToDoForm from "./components/NewToDoForm";
import ToDoList from "./components/ToDoList";
import { ToDoListItemType } from "./components/models";
import { Card } from "antd";
import { useCallback, useEffect, useState } from "react";

const ToDo = () => {
	const [toDos, setToDos] = useState<ToDoListItemType[] | null>(null);
	const getTodos = useCallback(async () => {
		try {
			const response = await fetch("http://localhost:3001/todos");
			const responseJson = await response.json();
			setToDos(responseJson);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handleAddNewToDo = async (toDo: string) => {
		const data: ToDoListItemType = {
			label: toDo,
			value: "2",
			isCompleted: false,
		};
		const body = JSON.stringify(data);
		await fetch("http://localhost:3001/todos", {
			method: "POST",
			body,
			headers: {
				"Content-Type": "application/json",
			},
		});
		getTodos();
	};

	const handleCheck = async (item: ToDoListItemType, isChecked: boolean) => {
		const body = JSON.stringify({ isCompleted: isChecked });

		await fetch(`http://localhost:3001/todos/${item.id}`, {
			method: "PATCH",
			body,
			headers: {
				"Content-Type": "application/json",
			},
		});
		getTodos();
	};

	const handleDelete = async (item: ToDoListItemType) => {
		await fetch(`http://localhost:3001/todos/${item.id}`, {
			method: "DELETE",
		});
		getTodos();
	};

	useEffect(() => {
		getTodos();
	}, [getTodos]);

	return (
		<Card title="To do">
			<ToDoList toDos={toDos} onCheck={handleCheck} onDelete={handleDelete} />
			<NewToDoForm onAddNewToDo={handleAddNewToDo} />
		</Card>
	);
};

export default ToDo;
