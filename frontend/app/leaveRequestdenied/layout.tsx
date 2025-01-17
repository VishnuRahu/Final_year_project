import {Sidebar} from "@/components/sidebar";

interface LeaveRequestProps{
    children:React.ReactNode
}


const LeaveRequestDenied=({
    children,
}:LeaveRequestProps)=>{
    return(
        <main className="h-full">
            <Sidebar/>
            
            <div className="pl-[60px] h-full">
            
                <div className="flex gap-x-3 h-full">
                    <div className="h-full flex-1">
                    
                        {children}                    
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LeaveRequestDenied;