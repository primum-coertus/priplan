import DateDisplay from "./components/date-display";
import TaskInfo from "./components/task-info";
import TodayTask from "./components/today-task";

export default function Homepage() {
  //todayTask nanti ngambil dari database -> get all task where date == today date
  const todayTask = [
    {
      id: '1',
      title: 'Mancing',
      plan: 'Mancing bareng anggota Primum Coertus di Rumah Adit',
      start_date: '07 September 2023',
      end_date: '07 September 2023',
      is_completed: true
    },
    {
      id: '2',
      title: 'Minecraft',
      plan: 'Mabar game Minecraft di Discord',
      start_date: '07 September 2023',
      end_date: '07 September 2023',
      is_completed: false
    },
  ];

  return (
    <div className="p-10 pb-0 flex flex-col gap-14 relative">
      <div className="flex flex-col gap-5">
        <DateDisplay></DateDisplay>
        <TaskInfo data={todayTask}></TaskInfo>
      </div>
      <TodayTask data={todayTask}></TodayTask>
      <footer className="p-4 text-center text-md font-bold">Powered by Primum Coertus</footer>
    </div>
  )
}
