import { ToDoListItemType } from "../models";
import style from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Checkbox, Typography } from "antd";

export type ToDoItemType = {
	item: ToDoListItemType;
	onCheck: (item: ToDoListItemType, isChecked: boolean) => void;
	onDelete: (item: ToDoListItemType) => void;
};

const ToDoItem = ({ item, onCheck, onDelete }: ToDoItemType) => {
	return (
		<div className={style.toDoItem}>
			<Checkbox
				checked={item.isCompleted}
				onChange={(e) => onCheck(item, e.target.checked)}
			>
				<Typography.Text delete={item.isCompleted}>
					{item.label}
				</Typography.Text>
			</Checkbox>
			<Button
				onClick={() => onDelete(item)}
				danger
				type="link"
				icon={<CloseOutlined />}
			/>
		</div>
	);
};

export default ToDoItem;
