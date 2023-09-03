export default function TodayTask({data}) {
  return (
    <div className="flex flex-col gap-9">
      <h1 className="text-3xl font-bold">Today's Task</h1>
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
    <div className="flex bg-app-white text-app-black rounded-md overflow-hidden max-h-28">
      <span className="w-16 bg-app-red"></span>
      <div className="p-2 pb-6 pl-4">
        <p className="text-2xl font-bold">{detail.tugas}</p>
        <p className="text-md">{detail.waktu}</p>
      </div>
    </div>
  )
}

function AddButton() {
  return (
    <div className="flex flex-col items-center">
      <button className="w-16 h-16 pb-2 rounded-full flex justify-center items-center text-7xl bg-app-blue">+</button>
      <p>Add new task</p>
    </div>
  )
}