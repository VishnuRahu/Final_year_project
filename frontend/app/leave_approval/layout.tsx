import { Sidebar } from "../dashboard/_components/sidebar/index"
import {Navbar} from "../dashboard/_components/sidebar/navbar"

interface LeaveApprovalProps{
    children:React.ReactNode
}


const LeaveApproval=({
    children,
}:LeaveApprovalProps)=>{
    return(
        <main className="h-full">
            <Sidebar/>
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    <div className="h-full flex-1">
                        <Navbar/>
                        {children}                    
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LeaveApproval;