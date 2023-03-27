import { ToDoListItemType } from "./models";

export const getRemainingTasks = (toDos: ToDoListItemType[]) => {
  const completedTasks = toDos.filter(({ isCompleted }) => isCompleted)
  return completedTasks.length
}
