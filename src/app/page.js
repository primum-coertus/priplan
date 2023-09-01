import DateDisplay from "./components/date-display";
import TaskInfo from "./components/task-info";

export default function Homepage() {
  return (
    <div className="p-10">
      <DateDisplay></DateDisplay>
      <TaskInfo></TaskInfo>
    </div>
  )
}
