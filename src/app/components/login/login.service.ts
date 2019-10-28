import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  authenticate(username, password) {
    const authentication$ = new Subject();
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    const req = this.httpClient.get('http://localhost:8080/login', {headers});
    req.subscribe(userData => {
      sessionStorage.setItem('userName', username);
      authentication$.next(userData);
    });
    return authentication$;
    
    // pipe(
    //   map(
    //     userData => {
    //       sessionStorage.setItem('username', username);
    //       return userData;
    //     }
    //   )
    // );
  }
}
