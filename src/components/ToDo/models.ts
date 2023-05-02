import { DayTimeEnum } from "../DailySchedule/models";
export type ToDoListItemType = {
	id?: number | string;
	label: string;
	isCompleted: boolean;
	dayTime: DayTimeEnum;
};
