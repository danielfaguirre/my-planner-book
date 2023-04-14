import { User } from "@firebase/auth";

export type AuthContextType = {
	user?: User;
	setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};
