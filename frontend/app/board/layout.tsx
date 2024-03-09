import {Sidebar} from "@/components/sidebar"


interface BoardLayoutProps{
    children:React.ReactNode;
}

const BoardLayout=({
    children,
}:BoardLayoutProps)=>{
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

export default BoardLayout;