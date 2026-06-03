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
    <main>
      <h1 className="text-3xl pt-5">Active Courses</h1>
      <motion.div
        className="mt-5 grid lg:grid-cols-3 md:grid-cols-1  gap-4 "
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
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
            <Course
              key={c.id}
              title={c.title}
              progress={c.progress}
              icon={c.icon_name}
            />
          ))
        )}
      </motion.div>
    </main>
  );
}
