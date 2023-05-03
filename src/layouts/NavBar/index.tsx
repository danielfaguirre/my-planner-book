import { useAuthContext } from "../../contexts/AuthContext";
import { firebaseSignoutUser } from "../../services/Auth/login.service";
import {
	BookOutlined,
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const NavBar = () => {
	const { user, setUserInfo } = useAuthContext();
	const mainLabel = user
		? `Hello ${user?.displayName}`
		: "Welcome to My planner book";
	const mainIcon = user ? <UserOutlined /> : <BookOutlined />;

	const handleSignout = async () => {
		const { error } = await firebaseSignoutUser();
		if (error) {
			/**
			 * TODO:
			 * Error notification
			 */
		} else {
			setUserInfo(undefined);
		}
	};

	const getMenuChildren = () => {
		if (user) {
			return [
				{
					key: "0-1",
					icon: <SettingOutlined />,
					label: "Settings",
				},
				{
					key: "0-2",
					icon: <LogoutOutlined />,
					label: "Sign out",
					onClick: () => handleSignout(),
				},
			];
		}
		return [];
	};

	return (
		<Menu
			theme="dark"
			mode="horizontal"
			items={[
				{
					key: "0",
					label: mainLabel,
					icon: mainIcon,
					children: getMenuChildren(),
				},
			]}
		/>
	);
};

export default NavBar;
