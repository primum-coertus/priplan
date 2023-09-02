export default function TaskInfo() {
  return (
    <div className="pt-8 flex gap-5">
      <TaskProgress></TaskProgress>
      <UpcomingTask></UpcomingTask>
    </div>
  );
}

function TaskProgress() {
  //todayTask nanti ngambil dari database
  const todayTask = [
    {
      tugas: 'Mancing',
      waktu: '02 September 2023 | 09:00 AM',
      telahSelesai: true
    },
    {
      tugas: 'Service Komputer',
      waktu: '02 September 2023 | 13:00 PM',
      telahSelesai: true
    },
    {
      tugas: 'Mabar Minecraft',
      waktu: '02 September 2023 | 16:00 PM',
      telahSelesai: true
    },
    {
      tugas: 'Ngoding',
      waktu: '02 September 2023 | 20:00 PM',
      telahSelesai: true
    },
  ];
  
  const completedTask = todayTask.filter(obj => obj.telahSelesai).length;
  const taskRemaining = todayTask.length - completedTask;
  const completedTaskPercentage = (completedTask / todayTask.length) * 100;

  const progressBarStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "180px",
    height: "150px",
    borderRadius: "50%",
    background: `
      radial-gradient(closest-side, #2B2730 79%, transparent 80% 100%),
      conic-gradient(#040D12 ${completedTaskPercentage}%, grey 0)
      `
  }

  return (
    <div className="p-5 bg-app-purple flex gap-3 w-335-px rounded-xl items-center">
      <p className="flex flex-col items-center">
        <span className="bold text-7xl">{taskRemaining}</span>
        <span className="text-xl text-center">Tasks Remaining</span>
      </p>
      <div style={progressBarStyle}>
        <span className="text-2xl">{completedTaskPercentage}%</span>
        <progress value={completedTaskPercentage} min="0" max="100" className="invisible h-0 w-0">{completedTaskPercentage}%</progress>
      </div>
    </div>
  );
}

function UpcomingTask() {
  return (
    <div className="bg-app-blue w-full p-5 flex flex-col gap-4 rounded-md overflow-auto">
      <p className="text-2xl bold w-fit">Upcoming Task</p>
      <ul className="list-disc ml-5 flex flex-col flex-wrap gap-5 max-h-118-px w-fit">
        <UpcomingTaskList></UpcomingTaskList>
      </ul>
    </div>
  );
}

function UpcomingTaskList() {
  //upcomingTask nanti ngambil dri database
  const upcomingTask = [
    {
      tugas: 'Mancing',
      waktu: '03 September 2023 | 09:00 AM',
      telahSelesai: false
    },
    {
      tugas: 'Service Komputer',
      waktu: '03 September 2023 | 13:00 PM',
      telahSelesai: false
    },
    {
      tugas: 'Mabar Minecraft',
      waktu: '03 September 2023 | 16:00 PM',
      telahSelesai: false
    },
    {
      tugas: 'Ngoding',
      waktu: '03 September 2023 | 20:00 PM',
      telahSelesai: false
    },
  ]
  return upcomingTask.map((obj, idx) => (
    <li id={idx} className="ml-3">{obj.tugas}</li>
  ));
}