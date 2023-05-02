import { User } from "@firebase/auth";

export type UserAditionalType = {
	accessToken?: string;
};

export type AuthContextType = {
	user?: User & UserAditionalType;
	setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};
