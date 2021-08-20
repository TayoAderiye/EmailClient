import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator, FormControl } from "@angular/forms";
import { map, catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator {
  constructor(private auth: AuthService) { }

  validate = (control: AbstractControl) => {
    const {value} = control

    return this.auth.usernameAvailable(value).pipe(
      map(() => {
        // if (value.available){
        //   return null
        // }
        return null

      }),
      catchError((err) => {
        // console.log(err)
        if (err.error.username){
          return of({ nonUniqueUsername: true})
        } else {
          return of({ noConnection: true})
        }


      })
    )
  }
}
