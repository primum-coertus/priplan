"use client";

import { useState } from "react";
import AddTask from "./add-task";
import TaskDetail from "./task-detail";
import axios from "axios";

export default function TodayTask({data, updateHandler}) {
  const [detailTask, setDetailTask] = useState({});

  const modalHandler = (id,show) => {
    const targetElement = document.getElementById(id);
    if(show) {
      targetElement.classList.remove('hidden');
    } else {
      targetElement.classList.add('hidden');
    }
  };

  const detailModalHandler = detail => {
    setDetailTask(detail);
    modalHandler("taskDetail",true);
  }

  return (
    <div id="todayTask" className="flex flex-col gap-6 relative">
      <TaskDetail detail={detailTask} modalHandler={modalHandler}></TaskDetail>
      <AddTask modalHandler={modalHandler} updateHandler={updateHandler}></AddTask>
      <h1 className="text-2xl csm1:text-3xl font-bold">Today's Task</h1>
      <TaskList data={data} modalHandler={modalHandler} updateHandler={updateHandler} detailModalHandler={detailModalHandler}></TaskList>
    </div>
  );
}

function TaskList({data, modalHandler, updateHandler, detailModalHandler}) {
  return data.length ? (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 min-h-200-px">
        {data.map(task => (
          <TaskCard key={task._id} detail={task} updateHandler={updateHandler} detailModalHandler={detailModalHandler}></TaskCard>
        ))}
      </div>
      <div className="flex flex-col items-end mt-4">
        <AddButton showModal={modalHandler}></AddButton>
      </div>
    </>
  ) : (
    <div className="min-h-200-px flex flex-col items-center pt-8">
      <AddButton showModal={modalHandler}></AddButton>
    </div>
  )
}

function TaskCard({detail, updateHandler, detailModalHandler}) {
  const deleteHandler = (e) => {
    const id = e.target.id;
    axios.delete(`http://localhost:3001/deleteById/${id}`)
    .then(() => {
      updateHandler();
    })
    .catch(err => {
      console.log(err)
    })
  }

  const completeHandler = (e) => {
    const id = e.target.id;
    axios.put(`http://localhost:3001/toggleIsCompletedById/${id}`)
    .then(() => {
      updateHandler();
    })
    .catch(err => {
      console.log(err);
    })
  }

  const endDateFormat = end_date => {
    end_date = end_date.toString().split("T")[0].split("-");
    const [yy,mm,dd] = end_date;
    return `${dd}-${mm}-${yy}`;
  }

  return (
    <div className="flex bg-app-white text-app-black rounded-md overflow-hidden h-36 hover:cursor-pointer hover:shadow-[#6b7280_0px_3px_8px] transition-shadow duration-300">
      <span onClick={() => detailModalHandler(detail)} className={`${detail.is_completed ? 'bg-gray-400' : 'bg-app-red'} w-1/5`}></span>
      <div className="w-full relative flex justify-between">
        <span className="w-full h-5 absolute bottom-0 opacity-70 bg-white"></span>
        <div className="p-2 flex flex-col gap-2 pb-6 pl-4">
          <div>
            <p className="text-xl font-bold csm2:text-2xl">{detail.title}</p>
            <p className="text-xs csm2:text-sm">{endDateFormat(detail.end_date)}</p>
          </div>
          <p className="text-sm csm2:text-base">{detail.plan}</p>
        </div>
        <div className="p-4 text-2xl flex items-center justify-end gap-3">
          <button type="button" onClick={deleteHandler}><svg className="w-5 h-5 csm2:w-7 csm2:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FF5E5E" id={detail._id}><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
          <button type="button" onClick={completeHandler}><svg className="w-5 h-5 csm2:w-7 csm2:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#7180FF" id={detail._id}><path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg></button>
        </div>
      </div>
    </div>
  )
}

function AddButton({showModal}) {
  return (
    <div className="flex flex-col items-center">
      <button className="w-14 h-14 md:w-16 md:h-16 pb-2 rounded-full flex justify-center items-center text-5xl md:text-7xl bg-app-blue overflow-hidden" onClick={() => showModal("addTask",true)}>+</button>
      <p className="text-sm md:text-lg">Add new task</p>
    </div>
  )
}