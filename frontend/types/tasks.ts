/** safely remove this once after deleting the old version of tasks */ 
export interface ITasks {
    _id: string;
    title: string;
    description: string;
    assigned_to: string;
    deadline: Date;
    status:string;
}
/** */

export interface ITask {
    _id: string;
    title: string;
    description: string;
    assigned_to: string;
    deadline: Date;
    status:string;
}