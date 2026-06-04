import { supabase } from "../lib/supabase";
import CoursesGrid from "../components/CoursesGrid";
import CourseError from "../error";

export default async function Courses() {
  const { data: courses, error } = await supabase.from("courses").select("*");
  if (error) {
    console.error(error);
    return <CourseError />
    //return <div className="mt-5 text-red-500">Failed to load courses</div>;
  }

  return (
    <main>
      <h1 className="text-3xl pt-5">Active Courses</h1>
      <CoursesGrid courses={courses ?? []} />
    </main>
  );
}