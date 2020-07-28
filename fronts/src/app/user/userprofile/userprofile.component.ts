import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { EdituserComponent } from '../../edit/edituser/edituser.component';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  dob: any;
  address: any;
  dept: any;
  faculty: any;
  about: any;
  biograph: any;
  document1: any;
  gender: any;
  docution3: any;
  id: any;
  document2: any;
  instagram: any;
  linkedin: any;
  status: any;
  title: any;
  twitter: any;
  year_of_g: any;
  youtube: any;
  updated_at: any;
  user_image: any;
phone:any;
birthplace:any;
website:any;
occupation:any;
hobbies:any;
  url: any;
  app: any;
  fname: any;
  constructor(private formBuilder: FormBuilder,public actRoute: ActivatedRoute, public snackBar: MatSnackBar, private Token: TokenService, private Jarwis: JarwisService,private router: Router) { }
  public response:any;
name:any;
email:any;

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params => {
      let id = params.get('id');
      
    this.Jarwis.userprofile(id).subscribe(
      data=>{
      this.response = data;
      this.name=this.response.name;
      this.email=this.response.email;
      this.dob=this.response.dob;
      this.address=this.response.address;
      this.dept=this.response.dept;
      this.faculty=this.response.faculty;
      this.about=this.response.about;
this.biograph=this.response.biograph;
this.dept=this.response.dept;
this.document1=this.response.document1;
this.document2=this.response.document2;
this.docution3=this.response.docution3;
this.gender=this.response.gender;
this.id=this.response.id;
this.instagram=this.response.instagram
this.linkedin=this.response.linkedin
// this.member_id=this.response.
this.status=this.response.status
this.title=this.response.title
this.twitter=this.response.twitter
this.updated_at=this.response.updated_at
this.user_image=this.response.user_image
this.year_of_g=this.response.year_of_g
this.youtube=this.response.youtube
this.phone=this.response.phone
this.birthplace=this.response.birthplace
this.occupation=this.response.occupation
this.hobbies=this.response.hobbies
let name=this.response.name.split(',');
// let name=nam[0].split(',')
this.fname=name[0];

      console.log(this.fname)
      }
    )
  }))


  this.Jarwis.getappsetting().subscribe(
    data=>{
    this.app = data;
    this.url=this.app.url;
    }
  )
// }
  }

}
