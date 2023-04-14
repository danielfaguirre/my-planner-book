import { FormItemProps } from "antd";
import { FormItemInputProps } from "antd/es/form/FormItemInput";
import { FormItemLabelProps } from "antd/es/form/FormItemLabel";
import { InputProps } from "rc-input";

export type LoginInfo = {
	email: string;
	password: string;
};

export type SignupInfo = {
	email: string;
	password: string;
	confirmPassword?: string;
	name: string;
};

export type ExtraInputType = {
	formItem: FormItemProps & FormItemLabelProps & FormItemInputProps;
	input: InputProps;
};
