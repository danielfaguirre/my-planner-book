import ToDo from "../ToDo";
import { DayTimeEnum } from "./models";
import style from "./style.module.css";
import { Card } from "antd";

const DailySchedule = () => {
	return (
		<Card title="Today's schedule">
			<section className={style.todaysSchedule}>
				<ToDo title="Morning" dayTime={DayTimeEnum.MOORNING} />
				<ToDo title="Afternoon" dayTime={DayTimeEnum.AFTERNOON} />
				<ToDo title="Evening" dayTime={DayTimeEnum.EVENING} />
			</section>
		</Card>
	);
};

export default DailySchedule;
