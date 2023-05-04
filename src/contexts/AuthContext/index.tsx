import { AuthContextType } from "../models";
import { User } from "@firebase/auth";

import storage from "../../config/storage";
import { StorageEnum } from "../../config/storage/models";
import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | undefined>();
	const [userId, setUserId] = useState<string>("");

	const setUserInfo = (userInfo?: User) => {
		if (userInfo) {
			setUserId(userInfo.uid)
			storage.set(StorageEnum.USER, userInfo)
		} else {
			storage.remove(StorageEnum.USER)
		}
		setUser(userInfo)
	}

	useEffect(() => {
		const storagedUser = storage.get<User>(StorageEnum.USER)
		if (!user && storagedUser) {
			setUser(storagedUser)
			setUserId(storagedUser.uid)
		}
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, userId, setUserInfo, setUserId }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext) as AuthContextType;
};

export default AuthProvider;
