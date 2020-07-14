import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public form = {
    member_cat_name: null,
    about: null,
  };
  public error = [];
  userdata: any;
  count: any;
  app: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router
  ) { }
user:any;
  onSubmit() {
    this.Jarwis.addusercat(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.about="";
    this.form.member_cat_name="";
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
    this.Jarwis.getmember().subscribe(
      data=>{
      this.userdata = data; 
      this.user=this.userdata.user
      this.count=this.userdata.usercount
    //  console.log(this.user)

      
      }
    )
    this.Jarwis.getappsetting().subscribe(
      data=>{
      this.app = data;
      
      }
    )
  }
}
