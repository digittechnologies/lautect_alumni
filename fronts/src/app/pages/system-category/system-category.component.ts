import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-system-category',
  templateUrl: './system-category.component.html',
  styleUrls: ['./system-category.component.css']
})
export class SystemCategoryComponent implements OnInit {
  public form = {
    app_cate_name: null,
    description: null,
  };
  public error = [];
  app: any;
  url: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router,
    private jwtHelper: JwtHelperService,
    private Auth: AuthService,
  ) { }
cat:any;
  onSubmit() {
    this.Jarwis.addcat(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.description="";
    this.form.app_cate_name="";
    let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
      duration: 2000
    })  
    this.ngOnInit()
  }

  handleError(error) {
    let snackBarRef = this.snackBar.open("Not Save", 'Dismiss', {
      duration: 3000
    }) 
  }

  ngOnInit() {
    
   
    this.Jarwis.getcat().subscribe(
      data=>{
      this.cat = data; 
    //  console.log(this.usercat)

      
      }
    )
    this.Jarwis.getappsetting().subscribe(
      data=>{
      this.app = data;
      this.url=this.app.url;
      }
    )
  }
  
}
