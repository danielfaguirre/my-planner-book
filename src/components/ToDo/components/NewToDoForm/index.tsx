import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import Form from "antd/es/form/Form";
import { useState } from "react";

export type NewToDoFormType = {
	loading: boolean;
	onAddNewToDo: (toDo: string) => void;
};

const NewToDoForm = ({ loading, onAddNewToDo }: NewToDoFormType) => {
	const [toDo, setToDo] = useState<string>("");
	const handleFormFinish = () => {
		onAddNewToDo(toDo);
		setToDo("");
	};
	return (
		<Form autoComplete="off" onFinish={handleFormFinish}>
			<Space.Compact block>
				<Input
					required
					value={toDo}
					onChange={(e) => setToDo(e.target.value)}
					placeholder="Add new To do here..."
					type="text"
				/>
				<Button
					loading={loading}
					htmlType="submit"
					type="primary"
					icon={<PlusOutlined />}
				/>
			</Space.Compact>
		</Form>
	);
};

export default NewToDoForm;
