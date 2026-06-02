"use client";
import { useState, useEffect } from "react";

export default function ProgressBar({ value }: { value: number }) {
   const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 100);
    return () => clearTimeout(timer);
  }, [value]);
 return <div className="shadow w-full bg-blue-200 rounded-2xl mt-2">
    <div className="bg-blue-900 text-xs leading-none py-1 text-center rounded-2xl transition-all duration-500 ease-out text-white" style={{width: `${progress}%`}}>{`${progress}%`}</div>
  </div>

  // return <progress className="border-2 rounded-xl bg-transparent" max={100} value={value} />;
}
