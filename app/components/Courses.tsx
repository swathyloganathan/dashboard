"use client";
import { Suspense, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Course from "./Course";
import { CourseType } from "../lib/definitions";
export default function Courses() {
  const [courses, setCourses] = useState<CourseType[]>([]);
//   const [loading, SetLoading] = useState(true);
  useEffect(() => {
    fetchCourses();
  }, []);
  const fetchCourses = async () => {
    const { data, error } = await supabase.from("courses").select("*");
    //console.log(data)
    if (error) {
      return;
    }
    // SetLoading(false);
    setCourses(data);
  };
  return (
    <section>
      <h1 className="text-3xl pt-5">Active Courses</h1>
      <div className="mt-5 grid grid-cols-3 gap-4">
        {courses.map((c) => (
          <div key={c.id}>
            <Suspense fallback={"Loading..."}>
              <Course title={c.title} progress={c.progress} />{" "}
            </Suspense>
          </div>
        ))}
      </div>
    </section>
  );
}
