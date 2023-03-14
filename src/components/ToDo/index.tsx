import { DayTimeEnum } from "../DailySchedule/models";
import NewToDoForm from "./components/NewToDoForm";
import ToDoList from "./components/ToDoList";
import { ToDoListItemType } from "./models";
import style from "./style.module.css";
import { Card } from "antd";
import { useCallback, useEffect, useState } from "react";

export type ToDoType = {
	title: string;
	dayTime: DayTimeEnum;
};

const ToDo = ({ title, dayTime }: ToDoType) => {
	const [toDos, setToDos] = useState<ToDoListItemType[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const getTodos = useCallback(async () => {
		try {
			const response = await fetch(
				`http://localhost:3001/todos?dayTime=${dayTime}`,
			);
			const responseJson = await response.json();
			setToDos(responseJson);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handleAddNewToDo = async (toDo: string) => {
		setLoading(true);
		const data: ToDoListItemType = {
			label: toDo,
			value: "2",
			isCompleted: false,
			dayTime,
		};
		const body = JSON.stringify(data);
		const response = await fetch("http://localhost:3001/todos", {
			method: "POST",
			body,
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.status === 201) setLoading(false);
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
		<Card
			loading={toDos === null}
			className={style.cardContainer}
			title={<span className={style.cardTitle}>{title}</span>}
		>
			<>
				<ToDoList toDos={toDos} onCheck={handleCheck} onDelete={handleDelete} />
				<NewToDoForm loading={loading} onAddNewToDo={handleAddNewToDo} />
			</>
		</Card>
	);
};

export default ToDo;
