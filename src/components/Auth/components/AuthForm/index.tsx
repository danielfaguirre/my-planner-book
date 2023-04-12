import { Routes } from "../../../../routes/constants";
import { AuthInfo } from "../../models";
import style from "./style.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type AuthFormType = {
	type: "login" | "signup";
	isLoading: boolean;
	errorMessage: string;
	onSubmit: (authInfo: AuthInfo) => void;
};

const AuthForm = ({
	isLoading,
	errorMessage,
	type,
	onSubmit,
}: AuthFormType) => {
	const navigate = useNavigate();
	const [authInfo, setAuthInfo] = useState<AuthInfo>({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		const newValue = { ...authInfo, [name]: value } as AuthInfo;
		setAuthInfo(newValue);
	};

	const formTitle = type === "signup" ? "Sign up" : "Log in";
	const redirectLabel = type === "signup" ? "Log in" : "Sign up";
	const redirectRoute = type === "signup" ? Routes.LOGIN : Routes.SIGNUP;

	return (
		<Form
			onFinish={() => onSubmit(authInfo)}
			name={formTitle}
			className={style.loginForm}
			initialValues={{ remember: true }}
		>
			<Typography.Title>{formTitle}</Typography.Title>
			<Form.Item
				name="email"
				rules={[{ required: true, message: "Please input your Email!" }]}
			>
				<Input
					disabled={isLoading}
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Email"
					name="email"
					onChange={handleChange}
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Please input your Password!" }]}
			>
				<Input
					disabled={isLoading}
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
					name="password"
					onChange={handleChange}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					loading={isLoading}
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					{formTitle}
				</Button>
				<Button
					loading={isLoading}
					onClick={() => navigate(redirectRoute)}
					type="link"
				>
					{redirectLabel}
				</Button>
			</Form.Item>
			{errorMessage && <Alert type="error" message={errorMessage} />}
		</Form>
	);
};

export default AuthForm;
