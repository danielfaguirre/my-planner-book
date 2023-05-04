export const validateConfirmPassword = (
	password: string,
	confirmPassword?: string,
) => {
	if (password !== confirmPassword) {
		return "Password and confirm password dones not match";
	}
	return "";
};
