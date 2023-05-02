import { DayTimeEnum } from "../../components/DailySchedule/models";
import { CollectionsEnum } from "../APIProviders/models";
import { getProvider } from "../APIProviders/utils";
import IToDos from "./impl/interfaces";

const provider = getProvider(CollectionsEnum.TODOS) as IToDos;

export const getToDosService = (dayTime: DayTimeEnum) => {
	return provider.getToDos(dayTime);
};

export const addNewToDoService = (label: string, dayTime: DayTimeEnum) => {
	return provider.addNewToDo(label, dayTime);
};

export const checkToDoService = (toDoId: number, isChecked: boolean) => {
	return provider.checkToDo({ isChecked }, toDoId);
};

export const deleteToDoService = (toDoId: number) =>
	provider.deleteToDo(toDoId);
