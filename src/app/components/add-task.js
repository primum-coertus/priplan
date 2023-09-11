"use client";
import { useState } from "react";
import axios from "axios";

export default function AddTask({modalHandler,updateHandler}) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputStartDate, setInputStartDate] = useState("");
  const [inputEndDate, setInputEndDate] = useState("");
  const [inputPlan, setInputPlan] = useState("");
  // const [infoAlert, setInfoAlert] = useState("");

  const titleChangeHandler = event => setInputTitle(event.target.value);
  const startDateChangeHandler = event => setInputStartDate(event.target.value);
  const endDateChangeHandler = event => setInputEndDate(event.target.value);
  const planChangeHandler = event => setInputPlan(event.target.value);

  const postNewTask = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/create', {
      title: inputTitle,
      plan: inputPlan,
      start_date: inputStartDate,
      end_date: inputEndDate,
      is_completed: false
    }).then(() => {
      // setInfoAlert("Success add new task list");
      const resetButton = document.getElementById("reset");
      resetButton.click();
      modalHandler("addTask",false);
      updateHandler();
    }).catch(() => {
      // setInfoAlert("Failed add new task list");
    });
  }

  return (
    <div id="addTask" className="hidden absolute z-10">
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-60 z-20"></div>
      <form onSubmit={postNewTask} className="fixed top-6 right-6 left-6 md:max-w-2xl md:left-1/2 md:-ml-84 border-8 border-app-black bg-app-dark rounded-lg overflow-hidden z-30" id="add-task">
        <div className="p-7 flex flex-col gap-5 relative">
          <button type="button" className="absolute text-2xl text-red-600 top-1 right-2" onClick={() => modalHandler("addTask",false)}>x</button>
          <h3 className="text-xl csm2:text-2xl font-bold">Add Task</h3>
          {/* {infoAlert ? (<p className="text-md text-green-500">{infoAlert}</p>) : <p className="text-md text-red-500">{infoAlert}</p>} */}
          <input type="text" name="title" placeholder="Title" className="p-3 pb-1 text-base csm2:text-xl text-white bg-transparent outline-0 border-b-2 border-app-blue" onChange={titleChangeHandler}  required />
          <div className="flex flex-col cmd1:flex-row gap-5">
            <div className="flex flex-col cmd1:w-fit gap-2">
              <p>Start Date</p>
              <input type="date" name="start_date" className="p-2 rounded-sm outline-0 text-sm csm2:text-lg text-black" onChange={startDateChangeHandler} required />
            </div>
            <div className="flex flex-col cmd1:w-fit gap-2">
              <p>End Date</p>
              <input type="date" name="end_date" className="p-2 rounded-sm outline-0 text-sm csm2:text-lg text-black" onChange={endDateChangeHandler} required />
            </div>
          </div>
          <textarea name="taskDescription" className="p-3 rounded-md text-sm csm2:text-lg text-black outline-0 resize-none h-32 cmd1:min-h-200-px" placeholder="Add task description" onChange={planChangeHandler}></textarea>
          <div className="flex csm1:justify-end gap-3">
            <button type="submit" className="bg-app-blue p-3 rounded-md align-self-end text-sm csm2:text-base">Create Task</button>
            <button type="button" onClick={() => modalHandler("addTask",false)} className="bg-red-700 p-3 rounded-md align-self-end text-sm csm2:text-base">Cancel</button>
            <button type="reset" id="reset" className="hidden">Reset</button>
          </div>
        </div>
      </form>
    </div>
  )
}