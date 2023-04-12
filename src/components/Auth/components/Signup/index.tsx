import { firebaseSignupUser } from "../../../../services/Auth/signup.service";
import { AuthInfo } from "../../models";
import AuthForm from "../AuthForm";
import { useState } from "react";

const Signup = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (authInfo: AuthInfo) => {
		setErrorMessage("");
		setIsLoading(true);
		const { userCredential, error } = await firebaseSignupUser(authInfo);
		if (error) {
			setErrorMessage(error);
		} else {
			/**
			 * TODO:
			 * 1. Redirect to login
			 * 2. User feedback
			 */
			console.log(userCredential);
		}
		setIsLoading(false);
	};

	return (
		<AuthForm
			isLoading={isLoading}
			errorMessage={errorMessage}
			onSubmit={handleSubmit}
			type="signup"
		/>
	);
};

export default Signup;
