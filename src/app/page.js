import DateDisplay from "./components/date-display";
import TaskInfo from "./components/task-info";
import TodayTask from "./components/today-task";

export default function Homepage() {
  //todayTask nanti ngambil dari database
  const todayTask = [
    // {
    //   id: '1',
    //   tugas: 'Mancing',
    //   tanggal: '02 September 2023',
    //   waktu: '09:00 AM',
    //   telahSelesai: true
    // },
    // {
    //   id: '2',
    //   tugas: 'Service Komputer',
    //   tanggal: '02 September 2023',
    //   waktu: '13:00 PM',
    //   telahSelesai: true
    // },
    // {
    //   id: '3',
    //   tugas: 'Mabar Minecraft',
    //   tanggal: '02 September 2023',
    //   waktu: '16:00 PM',
    //   telahSelesai: false
    // },
    // {
    //   id: '4',
    //   tugas: 'Ngoding',
    //   tanggal: '02 September 2023',
    //   waktu: '20:00 PM',
    //   telahSelesai: false
    // },
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
