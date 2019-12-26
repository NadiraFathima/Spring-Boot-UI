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
    const authHeader = 'Basic ' + btoa(username + ':' + password);
    const headers = new HttpHeaders({Authorization: authHeader});
    const req = this.httpClient.get('http://localhost:8080/login', {headers});
    req.subscribe(isValid => {
      if(isValid) {
        sessionStorage.setItem('token', authHeader);
      }
      authentication$.next(isValid);
    });
    return authentication$;
  }
}
