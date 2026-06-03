import { BookOpenCheck } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";
// import NextDynamicIcon from "./DynamicIcon";
// import { DynamicIcon, IconName } from "lucide-react/dynamic";
export default function Course({
  title,
  progress,
  icon,
}: {
  title: string;
  progress: number;
  icon: string;
}) {
  //   const Icon = icon;
  return (
    <motion.li
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative md:block bg-neutral-primary-soft block max-w-sm p-6 border rounded-xl dark:rounded-base 
     bg-white shadow-xl shadow-gray-200/50 
            dark:bg-slate-800 dark:shadow-black/40 dark:border dark:border-slate-700/50
            dark:bg-linear-to-b dark:from-slate-900 dark:to-blue-950
            dark:hover:shadow-gray-600/30
            "
    >
      <p className="mb-2 md:text-sm lg:text-2xl  w-max md:w-32 lg:w-80 font-semibold tracking-tight text-pretty md:text-balance ">
        {title}
      </p>
      <BookOpenCheck
        color="white"
        size={25}
        className="absolute right-2 top-7"
      />
      {/* <DynamicIcon
        name={Icon as IconName}
        color="white"
        size={25}
        className="absolute right-2 top-7"
      /> */}
      {/* <NextDynamicIcon name={Icon as IconName} color="white" size={25} className="absolute right-2 top-7" /> */}
      <div className="mb-3 text-body">
        <ProgressBar value={progress} />
      </div>
    </motion.li>
  );
}
