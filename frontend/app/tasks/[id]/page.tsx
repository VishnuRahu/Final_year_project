import { ITask } from "@/types/tasks";
import { getTasksById } from "@/api";
import AddTask  from "@/app/tasks/[id]/_components/add-task";
import ViewTasks from "@/app/tasks/[id]/_components/view-tasks";

export default async function TasksPage({ params: { id } }: { params: { id: string } }) {

    const tasks: ITask[] = await getTasksById(id);

    return ( 
    <> 
        <AddTask />
        <ViewTasks tasks={tasks} />
    </> 
    )
}