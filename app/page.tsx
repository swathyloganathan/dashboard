
import Courses from "./components/Courses";
import HeroTile from "./components/HeroTile";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
       <Sidebar />
        <div className="flex-auto p-10">
          <HeroTile/>
          <Courses />
        </div>
      </div>
    </>
  );
}
