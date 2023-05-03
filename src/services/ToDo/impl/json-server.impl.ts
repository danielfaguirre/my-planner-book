import { DayTimeEnum } from "../../../components/DailySchedule/models";
import { ToDoListItemType } from "../../../components/ToDo/models";
import { SERVER_ROUTE } from "../../../config";
import * as Service from "../../APIProviders/jsonServerService";
import { CollectionsEnum } from "../../APIProviders/models";
import { serviceResponse } from "../../models";
import IToDos from "./interfaces";

const ENDPOINT = `${SERVER_ROUTE}/${CollectionsEnum.TODOS}`;

export default class ToDosJsonServerImpl implements IToDos {
	getToDos = (
		userId: string,
		dayTime: DayTimeEnum,
	): Promise<serviceResponse<ToDoListItemType[]>> => {
		const query = `dayTime=${dayTime}&_sort=isCompleted`;
		return Service.getData<ToDoListItemType[]>(`${ENDPOINT}?${query}`);
	};

	addNewToDo = (
		userId: string,
		label: string,
		dayTime: DayTimeEnum,
	): Promise<serviceResponse<ToDoListItemType>> => {
		const payLoad = {
			userId,
			label,
			isCompleted: false,
			dayTime,
		};
		return Service.postData(ENDPOINT, payLoad);
	};

	checkToDo = (
		isChecked: { isChecked: boolean },
		toDoId: string | number,
	): Promise<serviceResponse<ToDoListItemType>> => {
		const payLoad = {
			isCompleted: isChecked,
		};
		return Service.patchData(ENDPOINT, payLoad, toDoId);
	};

	deleteToDo = (toDoId: string | number): Promise<{ error: string }> =>
		Service.deleteData(ENDPOINT, toDoId);
}
