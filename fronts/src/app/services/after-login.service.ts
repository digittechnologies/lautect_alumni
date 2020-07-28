
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { JarwisService } from './jarwis.service';

@Injectable()
export class AfterLoginService implements CanActivate {
  response: any;
  role: any;
  pos:any;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.Token.get()){
      this.Jarwis.me().subscribe(
        data=>{       
        this.response = data;    
        this.role = this.response.id; 
        this.pos = this.response.user_cat_id; 
        if (this.pos == 1) {
          this.router.navigateByUrl('/profile/'+this.role+'');
        }
        if (this.pos.user_cat_id == 2) {
          this.router.navigateByUrl('/home');
        }        
      })
    }
    return this.Token.loggedIn();
  }
  constructor(
    private Token: TokenService,
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
  ) { }
  
}