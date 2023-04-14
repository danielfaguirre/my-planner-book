import { LoginInfo, SignupInfo } from "../../models";
import { authFormConfig } from "./constants";
import style from "./style.module.css";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

export type AuthFormType = {
	type: "login" | "signup";
	isLoading: boolean;
	errorMessage: string;
	authInfo?: SignupInfo | LoginInfo;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
};

const AuthForm = ({
	isLoading,
	errorMessage,
	type,
	onInputChange,
	onSubmit,
	authInfo,
}: AuthFormType) => {
	const navigate = useNavigate();

	const { formTitle, redirectLabel, redirectRoute } = authFormConfig[type];
	return (
		<Form
			onFinish={() => onSubmit()}
			name={formTitle}
			className={style.loginForm}
			initialValues={{ remember: true }}
		>
			<Typography.Title>{formTitle}</Typography.Title>
			{type === "signup" && (
				<Form.Item
					name="userName"
					rules={[
						{ required: true, message: "Please input your Display name!" },
					]}
				>
					<Input
						disabled={isLoading}
						prefix={<UserOutlined />}
						type="name"
						placeholder="User name"
						name="name"
						onChange={onInputChange}
					/>
				</Form.Item>
			)}
			<Form.Item
				name="email"
				rules={[{ required: true, message: "Please input your Email!" }]}
			>
				<Input
					disabled={isLoading}
					prefix={<MailOutlined />}
					placeholder="Email"
					name="email"
					onChange={onInputChange}
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Please input your Password!" }]}
			>
				<Input
					disabled={isLoading}
					prefix={<LockOutlined />}
					type="password"
					placeholder="Password"
					name="password"
					onChange={onInputChange}
				/>
			</Form.Item>
			{type === "signup" && (
				<Form.Item
					name="confirmPassword"
					rules={[
						{
							required: true,
							message: "Please confirm your Password!",
						},
						{
							message: "Password and confirm password dones not match",
							pattern: new RegExp(`^${authInfo?.password}$`, "i"),
						},
					]}
				>
					<Input
						disabled={isLoading}
						prefix={<LockOutlined />}
						type="password"
						placeholder="Confirm password"
						name="confirmPassword"
						onChange={onInputChange}
					/>
				</Form.Item>
			)}
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
