import { useAuthContext } from "../../../../contexts/AuthContext";
import useInputChange from "../../../../hooks/useInputChange";
import { Routes } from "../../../../routes/constants";
import { firebaseLoginUser } from "../../../../services/Auth/login.service";
import { LoginInfo } from "../../models";
import AuthForm from "../AuthForm";
import { User } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
	const navigate = useNavigate();
	const { user, setUserInfo, setUserId } = useAuthContext();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [authInfo, handleInputChange] = useInputChange<LoginInfo>({
		email: "",
		password: "",
	});

	const handleSubmit = async () => {
		setErrorMessage("");
		setIsLoading(true);
		const { user, error } = await firebaseLoginUser(authInfo);
		if (error) {
			setErrorMessage(error);
		} else {
			setUserInfo(user as User);
			setUserId(user?.uid as string)
		}
		setIsLoading(false);
	};

	useEffect(() => {
		if (user) navigate(Routes.ROOT);
	}, [user, navigate]);

	return (
		<AuthForm
			isLoading={isLoading}
			errorMessage={errorMessage}
			onSubmit={handleSubmit}
			onInputChange={handleInputChange}
			type="login"
		/>
	);
};

export default Login;
