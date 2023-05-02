import { DayTimeEnum } from "../../../components/DailySchedule/models";
import { ToDoListItemType } from "../../../components/ToDo/models";
import { serviceResponse } from "../../models";

export default interface IToDos {
	getToDos: (
		dayTime: DayTimeEnum,
	) => Promise<serviceResponse<ToDoListItemType[]>>;
	addNewToDo: (
		label: string,
		dayTime: DayTimeEnum,
	) => Promise<serviceResponse<ToDoListItemType>>;
	checkToDo: (
		isChecked: { isChecked: boolean },
		toDoId: string | number,
	) => Promise<serviceResponse<ToDoListItemType>>;
	deleteToDo: (toDoId: string | number) => Promise<{ error: string }>;
}
