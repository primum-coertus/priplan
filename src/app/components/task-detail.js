import { useState } from "react";
import { modalHandler } from "../page";
import axios from "axios";

export default function TaskDetail({detail}) {
  const [taskStatus, setTaskStatus] = useState(detail.is_completed);

  const deleteHandler = (e) => {
    const id = e.target.id;
    axios.delete(`http://localhost:3001/deleteById/${id}`)
    .then(() => {
      modalHandler("taskDetail",false);
    })
    .catch(err => {
      console.log(err)
    })
  }

  const completeHandler = (e) => {
    const id = e.target.id;
    axios.put(`http://localhost:3001/toggleIsCompletedById/${id}`)
    .then(() => {
      setTaskStatus(!taskStatus);
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
    <div id="taskDetail" className="hidden absolute z-10">
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-60 z-20"></div>
      <div className="fixed top-6 right-6 left-6 md:max-w-2xl md:left-1/2 md:-ml-84 border-8 border-app-black bg-app-dark rounded-lg overflow-hidden z-30" id="add-task">
        <div className="p-7 flex flex-col gap-7 relative">
          <button type="button" className="absolute text-2xl text-red-600 top-1 right-2" onClick={() => modalHandler("taskDetail",false)}>x</button>
          <h2 className="text-3xl font-bold">{detail.title}</h2>
          <div className="flex flex-col gap-3">
            <p><span className="text-app-red">Due Date</span> : {detail.end_date ? endDateFormat(detail.end_date) : ""}</p>
            <p><span className="text-app-red">Status</span> : {taskStatus ? "Done" : "On Going"}</p>
            <p><span className="text-app-red">Description</span> : {detail.plan}</p>
          </div>
          <div>
            <button type="button" onClick={deleteHandler}>
              <svg className="w-5 h-5 csm2:w-7 csm2:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FF5E5E" id={detail._id}>
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
              </svg>
            </button>
            <button type="button" onClick={completeHandler}>
              <svg className="w-5 h-5 csm2:w-7 csm2:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#7180FF" id={detail._id}>
                <path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}