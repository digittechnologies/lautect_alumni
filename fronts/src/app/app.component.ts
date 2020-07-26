import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material';
import { JarwisService } from './services/jarwis.service';
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public loggedIn: boolean;
  usercat: any;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private jwtHelper: JwtHelperService,
    private Jarwis: JarwisService,
  ) { }

  ngOnInit() {
    if (this.jwtHelper.isTokenExpired(localStorage.getItem("token"))) {
      // token expired logout($event)
      let snackBarRef = this.snackBar.open("Sorry!!! Your LoggedIn have Expired", 'Dismiss', {
        duration: 8000
      }) 
      this.logout()
      
      // console.log('token expired')
    } else {
      console.log('token valid')
      // token valid
    }
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
 
  }
  logout() {
    // event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }
}
