export interface ILeave {
    _id:string;
    email: string;
    designation: string;
    type_of_leave: string;
    from: Date;
    to: Date;
    alternate_class:string;
    comments_Hod:string;
    comments_principal:string;
    status:string;
    reason:string;
}