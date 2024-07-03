import { AbstractControl, ValidationErrors } from "@angular/forms";
import { combineLatest } from "rxjs";

export function PasswordValidator(control : AbstractControl) : ValidationErrors | null{
    const password = control.get('newpassword');
    const confirmPassword = control.get('confirmPassword');
    
    if(password?.pristine || confirmPassword?.pristine){
        return null;
    }

    return password && confirmPassword && password.value !== confirmPassword.value ? {'misMatch':true} : null ; 
}