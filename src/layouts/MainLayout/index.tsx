import style from "./style.module.css";
import { ReactNode } from "react";

export type MainLayoutType = {
	children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutType) => {
	return <div className={style.Container}>{children}</div>;
};

export default MainLayout;
