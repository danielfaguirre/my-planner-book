import ToDo from "../ToDo";
import { DayTimeEnum } from "./models";
import style from "./style.module.css";

const DailySchedule = () => {
	return (
		<section className={style.todaysSchedule}>
			<ToDo title="Morning" dayTime={DayTimeEnum.MOORNING} />
			<ToDo title="Afternoon" dayTime={DayTimeEnum.AFTERNOON} />
			<ToDo title="Evening" dayTime={DayTimeEnum.EVENING} />
		</section>
	);
};

export default DailySchedule;
