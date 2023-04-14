import { SignupInfo } from "../../components/Auth/models";
import { auth } from "../../config/firebase";
import {
	User,
	UserCredential,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";

export type signUpResponse = {
	user: User | null;
	error: string | null;
};

export const firebaseSignupUser = async (
	authInfo: SignupInfo,
): Promise<signUpResponse> => {
	const { email, password, name } = authInfo;
	let userCredential: UserCredential | null = null;
	try {
		userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		const { user } = userCredential;
		if (user !== null) {
			updateProfile(user, { displayName: name });
		}
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		return { user: null, error: error.message };
	}
	return { user: userCredential.user, error: null };
};
