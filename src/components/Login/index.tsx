import { Routes } from "../../routes/constants";
import style from "./style.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	return (
		<Form
			onFinish={(values) => console.log(values)}
			name="login"
			className={style.loginForm}
			initialValues={{ remember: true }}
		>
			<Typography.Title>Log in</Typography.Title>
			<Form.Item
				name="username"
				rules={[{ required: true, message: "Please input your Username!" }]}
			>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Username"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Please input your Password!" }]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button">
					Log in
				</Button>
				<Button onClick={() => navigate(Routes.SIGNUP)} type="link">
					Sign up!
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Login;
