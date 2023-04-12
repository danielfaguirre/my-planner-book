import { AuthInfo } from "../../components/Auth/models";
import { auth } from "../../config/firebase";
import { signUpResponse } from "./signup.service";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";

export const firebaseLoginUser = async (
	authInfo: AuthInfo,
): Promise<signUpResponse> => {
	const { email, password } = authInfo;
	let userCredential: UserCredential | null = null;
	try {
		userCredential = await signInWithEmailAndPassword(auth, email, password);
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		return { userCredential: null, error: error.message };
	}
	return { userCredential, error: null };
};
