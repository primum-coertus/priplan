export default function TaskInfo() {
  return (
    <div className="pt-8 flex gap-5">
      <TaskProgress></TaskProgress>
      <UpcomingTask></UpcomingTask>
    </div>
  );
}

function TaskProgress() {
  return (
    <div className="p-5 bg-app-purple flex gap-3 w-335-px rounded-xl items-center">
      <p className="flex flex-col items-center">
        <span className="bold text-7xl">5</span>
        <span className="text-xl text-center">Tasks Remaining</span>
      </p>
      <div class="progress-bar">
        <progress value="75" min="0" max="100" className="invisible h-0 w-0">75%</progress>
      </div>
    </div>
  );
}

function UpcomingTask() {
  return (
    <div className="bg-app-blue w-full p-5 flex flex-col gap-3 rounded-md">
      <p className="text-2xl bold">Upcoming Task</p>
      <ul className="list-disc ml-8">
        <li>Mancing</li>
      </ul>
    </div>
  );
}