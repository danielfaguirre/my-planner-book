import { LoginInfo } from "../../components/Auth/models";
import { auth } from "../../config/firebase";
import { signUpResponse } from "./signup.service";
import { User, signInWithEmailAndPassword } from "firebase/auth";

export const firebaseLoginUser = async (
	authInfo: LoginInfo,
): Promise<signUpResponse> => {
	const { email, password } = authInfo;
	let user: User | null = null;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		user = auth.currentUser;

		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		return { user: null, error: error.message };
	}
	return { user, error: null };
};

export const firebaseSignoutUser = async (): Promise<signUpResponse> => {
	try {
		await auth.signOut();
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		return { user: null, error: error.message };
	}
	return { user: auth.currentUser, error: null };
};
