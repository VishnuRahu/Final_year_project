
interface FooterProps{
    title:string,
    description:string,
    assigned_to:string,
    status:string
}

export const Footer=({
   title,
   description ,
   assigned_to,
   status
}:FooterProps)=>{
    return(
        <div className="relative bg-white p-3">
            <p className="text-[17px] truncate max-w-[calc(100%-20px)]">
            Title : {title}
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[15px]
            text-muted-foreground truncate">
              Description :{description} 
              
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[15px]
            text-muted-foreground truncate"> 
              Assigned to : {assigned_to}
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[15px]
            text-muted-foreground truncate">
             status : {status}
            </p>
        </div>
    )
}