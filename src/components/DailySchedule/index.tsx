import ToDo from "../ToDo";
import { DayTimeEnum } from "./models";
import style from "./style.module.css";
import { Tabs } from "antd";

const DailySchedule = () => {
	return (
		<section className={style.todaysSchedule}>
			<Tabs
				items={[
					{
						key: DayTimeEnum.BACKLOG.toString(),
						label: "Backlog",
						children: <ToDo title="Backlog" dayTime={DayTimeEnum.BACKLOG} />,
					},
					{
						key: DayTimeEnum.MOORNING.toString(),
						label: "Morning",
						children: <ToDo title="Morning" dayTime={DayTimeEnum.MOORNING} />,
					},
					{
						key: DayTimeEnum.AFTERNOON.toString(),
						label: "Afternoon",
						children: (
							<ToDo title="Afternoon" dayTime={DayTimeEnum.AFTERNOON} />
						),
					},
					{
						key: DayTimeEnum.EVENING.toString(),
						label: "Evening",
						children: <ToDo title="Evening" dayTime={DayTimeEnum.EVENING} />,
					},
				]}
			/>
		</section>
	);
};

export default DailySchedule;
