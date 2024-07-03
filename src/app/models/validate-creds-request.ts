export class ValidateCredsRequest{

    username:string;
    password:string;

    constructor(username:any, password:any){
        this.username=username;
        this.password=password;
    }

    getUsername() : string{
        return this.username;
    }

    getPassword() : string{
        return this.password;
    }
}
