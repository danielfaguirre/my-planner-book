import LoginPage from "../pages/login";
import Main from "../pages/main";
import SignupPage from "../pages/signup";
import { Routes } from "./constants";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: Routes.ROOT,
		element: <Main />,
	},
	{
		path: Routes.LOGIN,
		element: <LoginPage />,
	},
	{
		path: Routes.SIGNUP,
		element: <SignupPage />,
	},
]);
