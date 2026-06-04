"use client";

import { motion } from "framer-motion";
import Course from "./Course";

type CourseType = {
  id: number;
  title: string;
  progress: number;
  icon_name: string;
};

export default function CoursesPage({
  courses,
}: {
  courses: CourseType[];
}) {
  return (
    <motion.div
      className="mt-5 grid gap-4 md:grid-cols-1 lg:grid-cols-3"
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
      {courses.map((course) => (
        <Course
          key={course.id}
          title={course.title}
          progress={course.progress}
          icon={course.icon_name}
        />
      ))}
    </motion.div>
  );
}