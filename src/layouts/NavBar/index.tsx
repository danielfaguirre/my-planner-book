import { Menu } from "antd";

const NavBar = () => {
	return (
		<Menu
			theme="dark"
			mode="horizontal"
			items={[
				{
					key: 0,
					label: "My daily planner",
				},
			]}
		/>
	);
};

export default NavBar;
