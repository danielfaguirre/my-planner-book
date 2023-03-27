import style from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
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
					<Button
						onClick={onClick}
						danger
						type="link"
						icon={<CloseOutlined />}
					/>
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
