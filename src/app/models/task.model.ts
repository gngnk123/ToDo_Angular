export class TaskModel{
    constructor(
        public title :string,
        public description : string,
        public date? : Date,
        public id? : number,
    ){}
}