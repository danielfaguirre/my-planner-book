import { firebaseLoginUser } from "../../../../services/Auth/login.service";
import { AuthInfo } from "../../models";
import AuthForm from "../AuthForm";
import { useState } from "react";

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (authInfo: AuthInfo) => {
		setErrorMessage("");
		setIsLoading(true);
		const { userCredential, error } = await firebaseLoginUser(authInfo);
		if (error) {
			setErrorMessage(error);
		} else {
			/**
			 * TODO:
			 * 1. Create AuthContext
			 * 2. Call login endpoint
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
			type="login"
		/>
	);
};

export default Login;
