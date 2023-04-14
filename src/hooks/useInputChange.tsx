import { useState } from "react";

const useInputChange = <T,>(
	initialState: T,
): [T, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
	const [inputs, setInputs] = useState<T>(initialState);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setInputs({ ...inputs, [name]: value });
	};
	return [inputs, handleInputChange];
};

export default useInputChange;
