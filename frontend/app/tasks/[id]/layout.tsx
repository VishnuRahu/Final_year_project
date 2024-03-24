import {Sidebar} from "@/components/sidebar";

interface TaskLayoutProps{
    children:React.ReactNode;
}

const TaskLayout=({ children }: TaskLayoutProps )=>{
    return(
        <main className="h-full">
            <Sidebar/>
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    <div className="h-full flex-1">
                        <h1 className="space-y-4 p-4 items-center text-center justify-center text-5xl font-semibold text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"> Tasks </h1>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TaskLayout;