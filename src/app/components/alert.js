export default function Alert({message,show,success}) {
  return (<div className={`fixed ${show ? 'translate-y-0' : '-translate-y-16'} top-0 left-0 p-5 w-full z-50 flex justify-center items-center ${success ? 'bg-app-blue' : 'bg-app-red'} transition-transform duration-500`}>
    <p>{message}</p>
  </div>)
}