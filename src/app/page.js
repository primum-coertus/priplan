"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import DateDisplay from "./components/date-display";
import TaskInfo from "./components/task-info";
import TodayTask from "./components/today-task";

export default function Homepage() {
  const [todayTask, setTodayTask] = useState([]);

  const updateTodayTask = () => {
       //get today task from server
        axios.get('http://localhost:3001/getToday')
        .then(({data}) => {
          setTodayTask(data.data);
        }).catch(err => {
          console.log(err);
        });
  }

  useEffect(() => updateTodayTask(),[todayTask]);

  return (
    <div className="p-10 pb-0 flex flex-col gap-14 relative">
      <div className="flex flex-col gap-5">
        <DateDisplay></DateDisplay>
        <div className="flex flex-col mt-7 gap-8">
          <TaskInfo data={todayTask}></TaskInfo>
          <TodayTask data={todayTask} updateHandler={updateTodayTask}></TodayTask>
        </div>
        <footer className="p-4 text-center text-md font-bold">Powered by Primum Coertus</footer>
      </div>
    </div>
  )
}
