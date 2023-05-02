import { DayTimeEnum } from "../../../components/DailySchedule/models";
import { ToDoListItemType } from "../../../components/ToDo/models";
import * as Service from "../../APIProviders/firebaseService";
import { CollectionsEnum } from "../../APIProviders/models";
import { serviceResponse } from "../../models";
import IToDos from "./interfaces";
import { where } from "firebase/firestore";

const collectionName = CollectionsEnum.TODOS;

export default class ToDosFirebaseImpl implements IToDos {
	getToDos = async (
		dayTime: DayTimeEnum,
	): Promise<serviceResponse<ToDoListItemType[]>> => {
		const filter = where("dayTime", "==", dayTime);

		const firebaseResponse = await Service.getData(collectionName, filter);
		const adapter = firebaseResponse?.data?.map((item) => {
			return {
				id: item.document.id,
				label: item.document.label as string,
				isCompleted: item.document.isCompleted as boolean,
				dayTime: item.document.dayTime as DayTimeEnum,
			} as ToDoListItemType;
		});

		return {
			data: adapter || null,
			error: firebaseResponse.error,
		};
	};

	addNewToDo = async (
		label: string,
		dayTime: DayTimeEnum,
	): Promise<serviceResponse<ToDoListItemType>> => {
		const payLoad: ToDoListItemType = {
			label,
			isCompleted: false,
			dayTime,
		};
		const firebaseResponse = await Service.postData(collectionName, payLoad);
		return {
			data: null,
			error: firebaseResponse.error,
		};
	};

	checkToDo = async (
		isChecked: { isChecked: boolean },
		toDoId: string | number,
	): Promise<serviceResponse<ToDoListItemType>> => {
		const payLoad = {
			isCompleted: isChecked,
		};
		const firebaseResponse = await Service.patchData(
			collectionName,
			payLoad,
			toDoId as string,
		);

		return {
			data: null,
			error: firebaseResponse.error,
		};
	};

	deleteToDo = async (toDoId: string | number): Promise<{ error: string }> => {
		const firebaseResponse = await Service.deleteData(
			collectionName,
			toDoId as string,
		);
		return { error: firebaseResponse.error as string };
	};
}
