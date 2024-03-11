import {DeleteTask} from "@/app/dashboard/_components/board-card/delete-Task"

interface DeleteTask {
    id: string;
  }

export const Overlay: React.FC<DeleteTask> = ({id}) =>{
    console.log('id',id)
    return(
        <div className="opacity-0 group-hover:opacity-50 transition-opacity h-full w-full bg-black">
           <DeleteTask id={id} />
        </div>
    );
};