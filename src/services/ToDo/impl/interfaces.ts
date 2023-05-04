import { DayTimeEnum } from "../../../components/DailySchedule/models";
import { ToDoListItemType } from "../../../components/ToDo/models";
import { serviceResponse } from "../../models";

export default interface IToDos {
	getToDos: (
		userId: string,
		dayTime: DayTimeEnum,
	) => Promise<serviceResponse<ToDoListItemType[]>>;
	addNewToDo: (
		userId: string,
		label: string,
		dayTime: DayTimeEnum,
	) => Promise<serviceResponse<ToDoListItemType>>;
	checkToDo: (
		isChecked: boolean,
		toDoId: string | number,
	) => Promise<serviceResponse<ToDoListItemType>>;
	deleteToDo: (toDoId: string | number) => Promise<{ error: string }>;
}
