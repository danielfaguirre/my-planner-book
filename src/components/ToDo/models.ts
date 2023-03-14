import { DayTimeEnum } from '../DailySchedule/models';
export type ToDoListItemType = {
	id?: number;
	label: string;
	value: string;
	isCompleted: boolean;
	dayTime: DayTimeEnum
};
