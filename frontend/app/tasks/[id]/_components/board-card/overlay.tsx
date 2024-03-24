import { DeleteTask } from "@/app/tasks/[id]/_components/board-card/delete-Task"

interface DeleteTask {
    id: string;
  }

export const Overlay: React.FC<DeleteTask> = ({id}) =>{
    
    return(
        <div className="opacity-0 group-hover:opacity-70 transition-opacity h-full w-full bg-black flex justify-center place-items-center">
           <DeleteTask id={id} />
        </div>
    );
};