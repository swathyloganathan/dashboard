import ProgressBar from "./ProgressBar";

export default function Course({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) {
  // return <div classNameName="mt-2 p-3 rounded-2xl dark:bg-slate-800 dark:shadow-black/40 dark:border dark:border-slate-700/50">
  //     <h1>{children}</h1>
  // </div>

  return (
    <div
      className="bg-neutral-primary-soft block max-w-sm p-6 border rounded-xl dark:rounded-base 
     bg-white shadow-xl shadow-gray-200/50 
            dark:bg-slate-800 dark:shadow-black/40 dark:border dark:border-slate-700/50
            transition-transform duration-300 hover:scale-[1.1]
            dark:bg-linear-to-b dark:from-slate-900 dark:to-blue-950
            dark:hover:shadow-gray-600/30
            "
    >
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">
        {title}
      </h5>

      <div className="mb-3 text-body">
        <ProgressBar value={progress} />
        {/* <span className="ml-4">{`${progress}%`}</span> */}
      </div>
    </div>
  );
}
