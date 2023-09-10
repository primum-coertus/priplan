export default function TaskInfo({data}) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-stretch">
      <TaskProgress todayTask={data}></TaskProgress>
      <UpcomingTask></UpcomingTask>
    </div>
  );
}

function TaskProgress({todayTask}) {
  const completedTask = todayTask.length ? todayTask.filter(obj => obj.is_completed).length : 0;
  const taskRemaining = todayTask.length - completedTask;
  const completedTaskPercentage = todayTask.length ? parseInt((completedTask / todayTask.length) * 100) : 100;

  const progressBarStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background: `
      radial-gradient(closest-side, #2B2730 79%, transparent 80% 100%),
      conic-gradient(#040D12 ${completedTaskPercentage}%, grey 0)
      `
  }

  return (
    <div className="p-3 csm2:p-5 bg-app-purple flex gap-6 rounded-xl items-center justify-center w-full sm:w-fit">
      <p className="flex flex-col items-center">
        <span className="font-bold text-4xl csm1:text-6xl sm:text-5xl md:text-7xl">{taskRemaining}</span>
        <span className="text-base text-center csm1:text-xl csm2:text-2xl sm:text-base md:text-xl">Tasks<br />Remaining</span>
      </p>
      <div style={progressBarStyle} className="w-24 h-24 csm1:w-44 csm1:h-44 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
        <span className="text-base csm1:text-xl csm2:text-3xl sm:text-base md:text-2xl">{completedTaskPercentage}%</span>
        <progress value={completedTaskPercentage} min="0" max="100" className="invisible h-0 w-0">{completedTaskPercentage}%</progress>
      </div>
    </div>
  );
}

function UpcomingTask() {
  //upcomingTask nanti ngambil dri database
  const upcomingTasks = [
    {
      "_id": "64fd29824fb13449be6a7072",
      "title": "Front-End Priplan",
      "plan": "Menyelesaikan bagian front-end projek Priplan",
      "start_date": "2023-09-10T00:00:00.000Z",
      "end_date": "2023-09-17T00:00:00.000Z",
      "is_completed": false,
      "__v": 0
    },
    {
        "_id": "64fd2a6a4fb13449be6a78b0",
        "title": "Ngoding Bareng",
        "plan": "Ngoding bareng projek Priplan di Discord pukul 20.00 WIB",
        "start_date": "2023-09-10T00:00:00.000Z",
        "end_date": "2023-09-10T00:00:00.000Z",
        "is_completed": false,
        "__v": 0
    },
    {
      "_id": "64fb2f9eafcdcb85752fcdae",
      "title": "NaufalK",
      "plan": "tiga",
      "start_date": "2023-09-08T04:00:00.000Z",
      "end_date": "2023-09-08T04:00:00.000Z",
      "is_completed": false,
      "__v": 0
    },
    {
        "_id": "64fd364e4fb13449be6ae93b",
        "title": "Testing Plan 3",
        "plan": "Testing Plannnn",
        "start_date": "2023-09-11T00:00:00.000Z",
        "end_date": "2023-09-09T00:00:00.000Z",
        "is_completed": false,
        "__v": 0
    }
  ];

  return (
    <div className="bg-app-blue w-full p-4 md:p-5 flex flex-col gap-4 rounded-md">
      <p className="text-xl font-bold csm1:text-2xl sm:text-lg md:text-2xl">Upcoming Task</p>
      <ul className="list-disc w-fit ml-5 grid grid-cols-1 csm2:grid-rows-3 csm2:grid-flow-col sm:grid-rows-2 lg:grid-rows-3 gap-3 csm2:gap-4 csm2:gap-x-10">
        {upcomingTasks.length ? upcomingTasks.map(upcomingTask => (
          <UpcomingTaskList key={upcomingTask._id} data={upcomingTask}></UpcomingTaskList>
        )) : 
          <UpcomingTaskList data={{_id: 'emptyTask', title: "There's no upcoming task !"}}></UpcomingTaskList>
        }
      </ul>
    </div>
  );
}

function UpcomingTaskList({data}) {
    return (
      <div className="">
        <li className="text-sm csm1:text-lg sm:text-sm ml-3 md:text-base lg:text-xl">{data.title}</li>
      </div>
    );
}