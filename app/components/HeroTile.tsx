import { Flame } from 'lucide-react';
export default function HeroTile(){
    return <section
            className="p-6 max-w-full rounded-xl  transition-all duration-300
            bg-white shadow-xl shadow-gray-200/50 
            dark:bg-slate-800 dark:shadow-black/40 dark:border dark:border-slate-700/50"
          >
            <p className="mt-2 text-4xl text-center  text-slate-500 dark:text-slate-400">
              Welcome back Swathy ! 
              <Flame color='yellow' fill='orange' size={40} className='ml-4 inline-block'/>20
            </p>
            
          </section>
}