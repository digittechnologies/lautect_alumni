import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { EdituserComponent } from '../../edit/edituser/edituser.component';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";
import { MatSnackBar } from '@angular/material';
import { MatDialog,MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isPopupOpened = true;
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
  constructor(private formBuilder: FormBuilder,public actRoute: ActivatedRoute, public snackBar: MatSnackBar, private Token: TokenService, private Jarwis: JarwisService,private router: Router, private dialog?: MatDialog, ) { }
  public response:any;
name:any;
email:any;

  ngOnInit() {
    this.Jarwis.me().subscribe(
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
        }
    );
    this.Jarwis.getappsetting().subscribe(
      data=>{
      this.app = data;
      this.url=this.app.url;
      }
    )
  }
 
  edituser(id: number) {
// console.log(id)(click)="edituser(id)"
    this.isPopupOpened = true;
    this.Jarwis.me().subscribe(
      data=>{
        this.response = data;

      
      }
    ) 
    
   
    // console.log(user[0])
   const dialogRef = this.dialog.open(EdituserComponent, {
     minWidth: '60%',
     data: {user: this.response}
     
   });
  
   

    dialogRef.afterClosed().subscribe(result => {
     this.isPopupOpened = false;
     if(result == 'undefined'){

     }else{
      this.Jarwis.userupdate(result).subscribe(
        data =>  {
          let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
            duration: 2000
          }) 
        },
        error => {
          let snackBarRef = this.snackBar.open("Not Save ", 'Dismiss', {
            duration: 2000
          }) 
        }
        );
      // console.log(result)
       this.ngOnInit()
     }
     this.ngOnInit()
    });
        
  }
}
