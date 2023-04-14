import { AuthContextType } from "../models";
import { User } from "@firebase/auth";

import { auth } from "../../config/firebase";
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

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) setUser(user);
		});

		return unsubscribe;
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext) as AuthContextType;
};

export default AuthProvider;
