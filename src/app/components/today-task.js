import AddTask from "./add-task";

export default function TodayTask({data}) {
  return (
    <div className="flex flex-col gap-9 relative">
      <h1 className="text-3xl font-bold">Today's Task</h1>
      {/* <AddTask></AddTask> */}
      <TaskList data={data}></TaskList>
    </div>
  );
}

function TaskList({data}) {
  return data.length ? (
    <>
      <div className="grid grid-cols-2 gap-y-6 gap-x-24 min-h-200-px">
        {data.map(task => (
          <TaskCard detail={task}></TaskCard>
        ))}
      </div>
      <div className="flex flex-col items-end mt-4">
        <AddButton></AddButton>
      </div>
    </>
  ) : (
    <div className="min-h-200-px flex flex-col items-center pt-8">
      <AddButton></AddButton>
    </div>
  )
}

function TaskCard({detail}) {
  return (
    <div className="grid grid-cols-8 justify-start bg-app-white text-app-black rounded-md overflow-hidden max-h-28">
      <span className={`${detail.telahSelesai ? 'bg-gray-400' : 'bg-app-red'} col-start-1 col-span-1`}></span>
      <div className="p-2 pb-6 pl-4 col-start-2 col-span-5">
        <p className="text-2xl font-bold">{detail.tugas}</p>
        <p className="text-md">{detail.waktu}</p>
      </div>
      <div className="p-4 text-2xl flex col-start-7 col-span-2 items-center justify-end gap-4">
        <button><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#FF5E5E"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
        <button><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#7180FF"><path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg></button>
      </div>
    </div>
  )
}

function AddButton() {
  return (
    <div className="flex flex-col items-center">
      <button className="w-16 h-16 pb-2 rounded-full flex justify-center items-center text-7xl bg-app-blue overflow-hidden">+</button>
      <p>Add new task</p>
    </div>
  )
}