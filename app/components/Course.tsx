export default function Course({ children }: { children: React.ReactNode }){
    return <div className="mt-2 p-3 rounded-2xl dark:bg-slate-800 dark:shadow-black/40 dark:border dark:border-slate-700/50">
        <h1>{children}</h1>
    </div>
}