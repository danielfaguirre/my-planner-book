import NotesFirebaseImpl from "../Notes/impl/firebase.impl";
import NotesJsonServerImpl from "../Notes/impl/json-server.impl";
import ToDosFirebaseImpl from "../ToDo/impl/firebase.impl";
import ToDosJsonServerImpl from "../ToDo/impl/json-server.impl";
import { APIProvidersEnum, CollectionsEnum } from "./models";

export const providersMapped = {
	[CollectionsEnum.TODOS]: {
		[APIProvidersEnum.FIREBASE]: new ToDosFirebaseImpl(),
		[APIProvidersEnum.JSON_SERVER]: new ToDosJsonServerImpl(),
	},
	[CollectionsEnum.NOTES]: {
		[APIProvidersEnum.FIREBASE]: new NotesFirebaseImpl(),
		[APIProvidersEnum.JSON_SERVER]: new NotesJsonServerImpl(),
	},
};
