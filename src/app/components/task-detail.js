export default function TaskDetail({detail,modalHandler}) {
  const endDateFormat = end_date => {
    end_date = end_date.toString().split("T")[0].split("-");
    const [yy,mm,dd] = end_date;
    return `${dd}-${mm}-${yy}`;
  }
  return (
    <div id="taskDetail" className="hidden absolute z-10">
      <div className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-60 z-20"></div>
      <div className="fixed top-6 right-6 left-6 md:max-w-2xl md:left-1/2 md:-ml-84 border-8 border-app-black bg-app-dark rounded-lg overflow-hidden z-30" id="add-task">
        <div className="p-7 flex flex-col gap-5 relative">
          <button type="button" className="absolute text-2xl text-red-600 top-1 right-2" onClick={() => modalHandler("taskDetail",false)}>x</button>
          <h2>{detail.title}</h2>
          <p>Due : {detail.end_date ? endDateFormat(detail.end_date) : ""}</p>
          <p>Description : <br /> {detail.plan}</p>
        </div>
      </div>
    </div>
  );
}