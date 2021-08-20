import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs'
import { tap } from 'rxjs/operators'

interface UsernameAvailable {
  available: boolean
}

interface SignupCredentails {
  username: string,
  password: string,
  passwordConfirmation: string
}
interface SigninCredentails {
  username: string,
  password: string
}
interface SignupResponse {
  username: string,

}
interface SigninResponse {
  username: string

}

interface SignedinResponse {
  authenticated: boolean,
  username: string

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com'
  signedin$ =  new BehaviorSubject<boolean | null>(null)
  username = ''

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<UsernameAvailable>(`${this.rootUrl}/auth/username`, {
      username
    })
  }

  signup(credentials: SignupCredentails){
    return this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials).pipe(tap((response) => {
      this.signedin$.next(true)
      this.username = response.username
    }))
  }

  checkAuth(){
    return this.http.get<SignedinResponse>(`${this.rootUrl}/auth/signedin`)
        .pipe(
        tap(( { authenticated, username }) => {
          this.signedin$.next(authenticated)
          this.username = username
    })
    )
  }

  signout(){
    return this.http.post(`${this.rootUrl}/auth/signout`, {})
        .pipe(
          tap(() => {
            this.signedin$.next(false)
          })
        )
  }

  signin(credentials: SigninCredentails){
    return this.http.post<SigninResponse>(`${this.rootUrl}/auth/signin`, credentials).pipe(tap(({username}) => {
      this.signedin$.next(true)
      this.username = username
    }))
  }
}
