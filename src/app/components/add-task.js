export default function AddTask() {
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-60 z-0"></div>
      <form className="w-0.9 md:max-w-2xl fixed top-28 md:left-1/2 md:-ml-84 border-8 border-app-black bg-app-dark rounded-lg overflow-hidden z-10">
        <div className="p-7 flex flex-col gap-5 relative">
          <button type="button" className="absolute text-2xl text-red-600 top-1 right-2">x</button>
          <h3 className="text-4xl font-bold">Add Task</h3>
          <div className="w-fit flex flex-col gap-5">
            <input name="datePick" type="date" className="bg-transparent outline-0 text-lg" required />
            <input type="time" name="timePick" className="bg-transparent outline-0 text-lg" required />
          </div>
          <input type="text" name="title" placeholder="Title" className="p-3 pb-1 text-lg text-white bg-transparent outline-0 border-b-2 border-app-blue" required />
          <textarea name="taskDescription" className="p-3 rounded-md text-lg text-black outline-0 resize-none" placeholder="Add task description"></textarea>
          <div className="flex justify-end">
            <button type="submit" className="bg-app-blue p-3 rounded-md align-self-end">Create Task</button>
          </div>
        </div>
      </form>
    </div>
  )
}