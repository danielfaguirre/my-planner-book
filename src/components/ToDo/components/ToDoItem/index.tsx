import { ToDoListItemType } from "../../models";
import style from "./style.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Checkbox, Popconfirm, Typography } from "antd";

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
			<Popconfirm
				title="Delete task"
				description="Are you sure to delete this task?"
				onConfirm={() => onDelete(item)}
				okText="Yes"
				cancelText="No"
			>
				<Button danger type="link" icon={<CloseOutlined />} />
			</Popconfirm>
		</div>
	);
};

export default ToDoItem;
