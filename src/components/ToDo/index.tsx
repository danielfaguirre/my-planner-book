import { useAuthContext } from "../../contexts/AuthContext";
import {
	addNewToDoService,
	checkToDoService,
	deleteToDoService,
	getToDosService,
} from "../../services/ToDo/toDo.services";
import { DayTimeEnum } from "../DailySchedule/models";
import NewToDoForm from "./components/NewToDoForm";
import ToDoList from "./components/ToDoList";
import { ToDoListItemType } from "./models";
import style from "./style.module.css";
import { getRemainingTasks } from "./utils";
import { Badge, Card } from "antd";
import { useCallback, useEffect, useState } from "react";

export type ToDoType = {
	title: string;
	dayTime: DayTimeEnum;
};

const ToDo = ({ title, dayTime }: ToDoType) => {
	const { userId } = useAuthContext()
	const [toDos, setToDos] = useState<ToDoListItemType[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const getTodos = useCallback(async () => {
		const { data } = await getToDosService(userId, dayTime);
		setToDos(data);
	}, [dayTime, userId]);

	const handleAddNewToDo = async (toDo: string) => {
		setLoading(true);
		await addNewToDoService(userId, toDo, dayTime);
		setLoading(false);
		getTodos();
	};

	const handleCheck = async (item: ToDoListItemType, isChecked: boolean) => {
		await checkToDoService(item.id as number, isChecked);
		getTodos();
	};

	const handleDelete = async (item: ToDoListItemType) => {
		await deleteToDoService(item.id as number);
		getTodos();
	};

	useEffect(() => {
		getTodos();
	}, [getTodos]);

	return (
		<Badge.Ribbon text={`${getRemainingTasks(toDos)} / ${toDos?.length || 0}`}>
			<Card
				title={<span className={style.cardTitle}>{title}</span>}
				loading={toDos === null}
				className={style.cardContainer}
			>
				<ToDoList toDos={toDos} onCheck={handleCheck} onDelete={handleDelete} />
				<NewToDoForm loading={loading} onAddNewToDo={handleAddNewToDo} />
			</Card>
		</Badge.Ribbon>
	);
};

export default ToDo;
