import { AuthInfo } from "../../components/Auth/models";
import { auth } from "../../config/firebase";
import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";

export type signUpResponse = {
	userCredential: UserCredential | null;
	error: string | null;
};

export const firebaseSignupUser = async (
	authInfo: AuthInfo,
): Promise<signUpResponse> => {
	const { email, password } = authInfo;
	let userCredential: UserCredential | null = null;
	try {
		userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		return { userCredential: null, error: error.message };
	}
	return { userCredential, error: null };
};
