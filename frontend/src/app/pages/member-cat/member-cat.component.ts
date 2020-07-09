import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-cat',
  templateUrl: './member-cat.component.html',
  styleUrls: ['./member-cat.component.css']
})
export class MemberCatComponent implements OnInit {
  public form = {
    member_cat_name: null,
    about: null,
  };
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }
membercat:any;
  onSubmit() {
    this.Jarwis.addmembercat(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.about="";
    this.form.member_cat_name="";
    this.ngOnInit()
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
    this.Jarwis.getmembercat().subscribe(
      data=>{
      this.membercat = data; 
    //  console.log(this.usercat)

      
      }
    )
  }
}
