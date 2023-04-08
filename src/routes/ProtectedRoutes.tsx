import { Routes } from "./constants";
import { Navigate } from "react-router-dom";

export type ProtectedRoutesType = {
	user: {} | null;
	children: JSX.Element;
};

const ProtectedRoute = ({ user, children }: ProtectedRoutesType) => {
	if (!user) {
		return <Navigate to={Routes.LOGIN} replace />;
	}
	return children;
};

export default ProtectedRoute;
