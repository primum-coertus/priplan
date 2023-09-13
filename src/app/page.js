"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import DateDisplay from "./components/date-display";
import TaskInfo from "./components/task-info";
import TodayTask from "./components/today-task";
import TaskDetail from "./components/task-detail";
import AddTask from "./components/add-task";
import Alert from "./components/alert";

export function modalHandler(id, show) {
  const targetElement = document.getElementById(id);
    if(show) {
      targetElement.classList.remove('hidden');
    } else {
      targetElement.classList.add('hidden');
    }
}

export default function Homepage() {
  const [todayTask, setTodayTask] = useState([]);
  const [detailTask, setDetailTask] = useState({});
  const [alertObj, setAlertObj] = useState({
    "message" : "",
    "show" : false,
    "success": true
  });

  const updateTodayTask = () => {
       //get today task from server
        axios.get('http://localhost:3001/getToday')
        .then(({data}) => {
          setTodayTask(data.data);
        }).catch(err => {
          setTodayTask([]);
          console.log(err);
        });
  }

  const detailModalHandler = detail => {
    setDetailTask(detail);
    modalHandler("taskDetail",true);
  }

  const alertHandler = (message,success) => {
    setAlertObj({
      "message" : message,
      "show" : true,
      "success" : success
    });

    setTimeout(() => {
      setAlertObj({
        "message" : "",
        "show" : false,
        "success": success
      })
    },5000);
  }

  useEffect(() => updateTodayTask(),[todayTask]);

  return (
    <div className="p-10 pb-0 flex flex-col gap-14 relative">
      <Alert message={alertObj.message} show={alertObj.show} success={alertObj.success}></Alert>
      <TaskDetail 
        detail={detailTask}
        alertHandler={alertHandler}
      ></TaskDetail>
      <AddTask 
        updateHandler={updateTodayTask}
        alertHandler={alertHandler}  
      ></AddTask>
      <div className="flex flex-col gap-5">
        <DateDisplay></DateDisplay>
        <div className="flex flex-col mt-7 gap-8">
          <TaskInfo data={todayTask} detailHandler={detailModalHandler}></TaskInfo>
          <TodayTask 
            data={todayTask} 
            updateHandler={updateTodayTask} 
            detailHandler={detailModalHandler}
            alertHandler = {alertHandler}
          ></TodayTask>
        </div>
        <footer className="p-4 text-center text-md font-bold">Powered by Primum Coertus</footer>
      </div>
    </div>
  )
}
