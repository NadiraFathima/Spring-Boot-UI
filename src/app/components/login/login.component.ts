import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  authenticate() {
    this.loginService.authenticate(this.userName, this.password).subscribe(userData => {
      this.router.navigate(['/home']);
    });
    
    // .pipe(
    //   map(() => {
    //     this.router.navigate(['/home']);
    //   })
    // );
  }

}
