import Link from "next/link";
import Courses from "./components/Courses";
import { Navbar } from "./components/Navbar";
import { X , ListCollapse} from "lucide-react";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <aside className="relative w-10 text-black bg-gray-500 dark:text-white  dark:bg-black rounded-xl border-2 h-svh">
          <ListCollapse  className="absolute top-1 right-1 cursor-pointer"/>
          {/* <X className="absolute top-1 right-1 cursor-pointer" /> */}
          
          
        </aside>
        <div className="flex-auto p-10">
          <section
            className="p-6 max-w-full rounded-xl  transition-all duration-300
            bg-white shadow-xl shadow-gray-200/50 
            dark:bg-slate-800 dark:shadow-black/40 dark:border dark:border-slate-700/50"
          >
            <p className="mt-2 text-4xl text-center text-slate-500 dark:text-slate-400">
              Welcome back Swathy !
            </p>
          </section>
          <Courses />
        </div>
      </div>
    </>
  );
}
