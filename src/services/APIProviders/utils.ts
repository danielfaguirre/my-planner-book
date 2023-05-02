import { providersMapped } from "./constants";
import { APIProvidersEnum, CollectionsEnum } from "./models";

export const getProvider = (collection: CollectionsEnum) => {
	const provider = process.env.REACT_APP_API_PROVIDER as APIProvidersEnum;
	return providersMapped[collection][provider];
};
