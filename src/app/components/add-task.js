"use client";
import { useState } from "react";

export default function AddTask({display,closeModalHandler}) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputStartDate, setInputStartDate] = useState("");
  const [inputEndDate, setInputEndDate] = useState("");
  const [inputPlan, setInputPlan] = useState("");
  const [emptyInputAlert, setEmptyInputAlert] = useState(false);

  const titleChangeHandler = event => setInputTitle(event.target.value);
  const startDateChangeHandler = event => setInputStartDate(event.target.value);
  const endDateChangeHandler = event => setInputEndDate(event.target.value);
  const planChangeHandler = event => setInputPlan(event.target.value);

  const checkEmptyInput = () => {
    if(!inputTitle || !inputStartDate || !inputEndDate || !inputPlan) {
      setEmptyInputAlert(true);
      return false;
    }
    return true;
  }

  const postNewTask = () => {
    const noEmptyInput = checkEmptyInput();
    if(!noEmptyInput) {
      return false;
    }

  }

  return (
    <div className={`${display} absolute z-10`}>
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-60 z-20"></div>
      <form className="w-0.9 md:max-w-2xl fixed top-6 md:left-1/2 md:-ml-84 border-8 border-app-black bg-app-dark rounded-lg overflow-hidden z-30" id="add-task">
        <div className="p-7 flex flex-col gap-5 relative">
          <button type="button" className="absolute text-2xl text-red-600 top-1 right-2" onClick={closeModalHandler}>x</button>
          <h3 className="text-4xl font-bold">Add Task</h3>
          {emptyInputAlert ? (<p className="text-md text-red-500">Please fill out all the required input fields !</p>) : <></>}
          <input type="text" name="title" placeholder="Title" className="p-3 pb-1 text-lg text-white bg-transparent outline-0 border-b-2 border-app-blue" onChange={titleChangeHandler}  required />
          <div className="flex gap-5">
            <div className="w-fit flex flex-col gap-2">
              <p>Start Date</p>
              <input type="date" name="start_date" className="p-2 rounded-sm outline-0 text-lg text-black" onChange={startDateChangeHandler} required />
            </div>
            <div className="w-fit flex flex-col gap-2">
              <p>End Date</p>
              <input type="date" name="end_date" className="p-2 rounded-sm outline-0 text-lg text-black" onChange={endDateChangeHandler} required />
            </div>
          </div>
          <textarea name="taskDescription" className="p-3 rounded-md text-lg text-black outline-0 resize-none min-h-200-px" placeholder="Add task description" onChange={planChangeHandler}></textarea>
          <div className="flex justify-end gap-3">
            <button type="button" className="bg-app-blue p-3 rounded-md align-self-end" onClick={postNewTask}>Create Task</button>
            <button type="button" onClick={closeModalHandler} className="bg-red-700 p-3 rounded-md align-self-end">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}