import { ToDoListItemType } from "./models";

export const getRemainingTasks = (toDos: ToDoListItemType[] | null) => {
	const completedTasks = toDos?.filter(({ isCompleted }) => isCompleted);
	return completedTasks?.length || 0;
};
