import { DeleteTask } from "@/app/tasks/[id]/_components/board-card/delete-Task"

interface DeleteTask {
    id: string;
  }

export const Overlay: React.FC<DeleteTask> = ({id}) =>{
    const role=localStorage.getItem('user_role');
    const isModifiable=role==="HOD"
    return(
        <div className="opacity-0 group-hover:opacity-70 transition-opacity h-full w-full bg-black flex justify-center place-items-center">
          {isModifiable?<DeleteTask id={id} />:null} 
        </div>
    );
};