import App from "../../App";
import { useAuthContext } from "../../contexts/AuthContext";
import MainLayout from "../../layouts/MainLayout";
import ProtectedRoute from "../../routes/ProtectedRoutes";

const Main = () => {
	const { user } = useAuthContext();
	return (
		<ProtectedRoute user={user}>
			<MainLayout>
				<App />
			</MainLayout>
		</ProtectedRoute>
	);
};

export default Main;
