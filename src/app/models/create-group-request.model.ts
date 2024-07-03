class CreateGroupRequest{
    userId:any;
    groupName:any;
    groupId:any;

    constructor(userId:any, groupName:any, groupId:any){
        this.userId=userId;
        this.groupName = groupName;
        this.groupId = groupId;
        return this;
    }
}
export {CreateGroupRequest}