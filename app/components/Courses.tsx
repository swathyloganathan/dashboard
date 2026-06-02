"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Course from "./Course";
import { CourseType } from "../lib/definitions";
import { motion } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";

export default function Courses() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    fetchCourses();
  }, []);
  const fetchCourses = async () => {
    const { data, error } = await supabase.from("courses").select("*");
    //console.log(data)
    if (error) {
      return;
    }
    SetLoading(false);
    setCourses(data);
  };
  return (
    <motion.ul
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
    >
      <h1 className="text-3xl pt-5">Active Courses</h1>
      <div className="mt-5 grid grid-cols-3 gap-4">
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#a0a0a0"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "20px" }}
            wrapperClass="custom-loader"
            visible={true}
          />
        ) : (
          courses.map((c) => (
            <div key={c.id}>
              <Course title={c.title} progress={c.progress} icon={c.icon_name} />{" "}
            </div>
          ))
        )}
      </div>
    </motion.ul>
  );
}
