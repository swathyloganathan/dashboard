"use client";
import { X, ListCollapse, House, Library, User } from "lucide-react";
import { useState } from "react";
const items = [
    {
        label: 'Home',
        icon:'House'
    },
    {
        label: 'Courses',
        icon:'Library'
    },
    {
        label: 'Profile',
        icon:'User'
    }

]
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <aside
      className={`h-screen border-r bg-white dark:bg-slate-900 transition-all duration-300 relative 
        ${open ? "w-50" : "w-10"}`}
    >
      {!open && 
        <button onClick={() => setOpen(true)}>
          <ListCollapse className="absolute top-1 right-1 cursor-pointer" />
        </button>
      }
      {open &&
        <button onClick={() => setOpen(false)}>
          <X className="absolute top-1 right-1 cursor-pointer" />
        </button>
      }
      {open && 
      <div className="grid grid-cols-1 m-2">
        {items.map((item) => {
            // const Icon = item.icon;
            return <div className="p-2 hover:bg-gray-700 hover:rounded-sm" key={item.label}>
            {/* <Icon size={20} /> */}
            <div>{item.label}</div>
            </div>

})}
      </div>
      }
      {!open &&  (
        <div className="grid grid-cols-1 mb-4">
            <House className="mt-5 p-2" size={40} />
            <Library className="p-2" size={40} />
            <User className="p-2" size={40}/>
        </div>
      )}
    </aside>
  );
}
