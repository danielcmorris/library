/* eg: {"SubjectId":20,"Name":"Video","Prefix":"V","LastId":350,"Status":"Active"}  */
export class Subject {
    SubjectId:number;
    Name:string ='';
    Prefix:string='';
    LastId:number =-1;
    Status:string='New';
    constructor(){ }
}


