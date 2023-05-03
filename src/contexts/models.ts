import { User } from "@firebase/auth";

export type UserAditionalType = {
	accessToken?: string;
};

export type AuthContextType = {
	user?: User & UserAditionalType;
	userId: string;
	setUserInfo: (user?: User) => void;
	setUserId: React.Dispatch<React.SetStateAction<string>>;
};
