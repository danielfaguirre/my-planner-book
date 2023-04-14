import { Routes } from "./constants";
import { User } from "@firebase/auth";
import { Navigate } from "react-router-dom";

export type ProtectedRoutesType = {
	user?: User;
	children: JSX.Element;
};

const ProtectedRoute = ({ user, children }: ProtectedRoutesType) => {
	if (!user) {
		return <Navigate to={Routes.LOGIN} replace />;
	}
	return children;
};

export default ProtectedRoute;
