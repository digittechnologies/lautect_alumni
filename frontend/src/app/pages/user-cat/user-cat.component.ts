import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cat',
  templateUrl: './user-cat.component.html',
  styleUrls: ['./user-cat.component.css']
})
export class UserCatComponent implements OnInit {

  public form = {
    cat_name: null,
    about: null,
  };
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }
usercat:any;
  onSubmit() {
    this.Jarwis.addusercat(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    // this.Token.handle(data.access_token);
    this.form.about="";
    this.form.cat_name="";
    this.router.navigateByUrl('/user_cat');
    this.ngOnInit()
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
    this.Jarwis.getusercat().subscribe(
      data=>{
      this.usercat = data; 
    //  console.log(this.usercat)

      
      }
    )
  }

}
