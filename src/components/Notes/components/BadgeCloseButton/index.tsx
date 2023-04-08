import style from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { Badge, Button, Popconfirm } from "antd";
import { ReactNode } from "react";

export type BadgeCloseButtonType = {
	children: ReactNode;
	showButton: boolean;
	onClick: () => void;
};

const BadgeCloseButton = ({
	showButton,
	children,
	onClick,
}: BadgeCloseButtonType) => {
	return (
		<Badge
			className={style.closeButton}
			count={
				showButton ? (
					<Popconfirm
						title="Delete the task"
						description="Are you sure to delete this task?"
						onConfirm={onClick}
						okText="Yes"
						cancelText="No"
					>
						<Button danger type="link" icon={<CloseOutlined />} />
					</Popconfirm>
				) : (
					0
				)
			}
		>
			{children}
		</Badge>
	);
};

export default BadgeCloseButton;
