class CreateUserRequest{
    username:any;
    firstName:any;
    surname:any;
    email:any;
    password:any;
    dOB:any;
    User(username:any, firstName:any, surname:any, email:any, password:any, dOB:any){
        this.username=username;
        this.firstName = firstName;
        this.surname=surname;
        this.email=email;
        this.password = password;
        this.dOB=dOB;
        return this;
    }
}
export {CreateUserRequest}