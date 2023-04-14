import useInputChange from "../../../../hooks/useInputChange";
import { Routes } from "../../../../routes/constants";
import { firebaseSignupUser } from "../../../../services/Auth/signup.service";
import { SignupInfo } from "../../models";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [authInfo, handleInputChange] = useInputChange<SignupInfo>({
		email: "",
		password: "",
		name: "",
		confirmPassword: "",
	});

	const handleSubmit = async () => {
		setErrorMessage("");
		setIsLoading(true);
		const { error } = await firebaseSignupUser(authInfo);
		if (error) {
			setErrorMessage(error);
		} else {
			/**
			 * TODO:
			 * 1. User feedback
			 */
			navigate(Routes.LOGIN);
		}
		setIsLoading(false);
	};

	return (
		<AuthForm
			isLoading={isLoading}
			errorMessage={errorMessage}
			onSubmit={handleSubmit}
			onInputChange={handleInputChange}
			type="signup"
			authInfo={authInfo}
		/>
	);
};

export default Signup;
