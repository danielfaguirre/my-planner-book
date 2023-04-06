import { DayTimeEnum } from "../../components/DailySchedule/models";
import { ToDoListItemType } from "../../components/ToDo/models";
import { SERVER_ROUTE } from "../../config";
import * as Service from "../service";

const ENDPOINT = `${SERVER_ROUTE}/todos`;

export const getToDosService = (dayTime: DayTimeEnum) => {
	const query = `dayTime=${dayTime}`;
	return Service.getData<ToDoListItemType[]>(`${ENDPOINT}?${query}`);
};

export const addNewToDoService = (toDo: string, dayTime: DayTimeEnum) => {
	const payLoad: ToDoListItemType = {
		label: toDo,
		isCompleted: false,
		dayTime,
	};
	return Service.postData(ENDPOINT, payLoad);
};

export const checkToDoService = (toDoId: number, isChecked: boolean) => {
	const payLoad = {
		isCompleted: isChecked,
	};
	return Service.patchData(ENDPOINT, payLoad, toDoId);
};

export const deleteToDoService = (toDoId: number) =>
	Service.deleteData(ENDPOINT, toDoId);
