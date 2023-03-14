import App from "./App";
import MainLayout from "./layouts/MainLayout";
import NavBar from "./layouts/NavBar";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<NavBar />
		<MainLayout>
			<App />
		</MainLayout>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
