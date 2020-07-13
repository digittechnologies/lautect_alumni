import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../services/jarwis.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-system-setting',
  templateUrl: './system-setting.component.html',
  styleUrls: ['./system-setting.component.css']
})
export class SystemSettingComponent implements OnInit {

  public submitForm: any;
  image: any;
  datas: { formdata: any; };
  error: any;

  constructor(private formBuilder: FormBuilder, public snackBar: MatSnackBar, private Token: TokenService, private Jarwis: JarwisService,private router: Router) { }
  public response:any;

  ngOnInit() {
    this.submitForm = this.formBuilder.group(
     
      {
        app_name: ['',Validators.required],
       short_name: ['',Validators.required],
       email1:['',Validators.required],
       email2:[''],
       facebook:[''],
       phone_number:['',Validators.required],
       instagram:[''],
       youtube:[''],
       linkedin:[''],
       address:['',Validators.required],
       twitter:[''],
       id:[''],
     },
   )
     this.displayprofile()
   }
   displayprofile(){
  this.Jarwis.getappsetting().subscribe(
    data=>{
 
    this.response = data;
   console.log(this.response)
    this.submitForm = this.formBuilder.group(
     
     {
       app_name: [this.response.app_name],
       short_name: [this.response.short_name],
       email1:[this.response.email1],
       email2:[this.response.email2],
   facebook:[this.response.facebook],
   middlename:[this.response.middlename],
   phone_number:[this.response.phone_number],
   instagram:[this.response.instagram],
   youtube:[this.response.youtube],
   linkedin:[this.response.linkedin],
   address:[this.response.address],
   twitter:[this.response.twitter],
   id:[this.response.id]
     },
   )
   
 
   this.image=this.response.image

  })
  
 }
 uploadFile(event){
   let files =event.target.files[0];
   let reader = new FileReader();
   let vm = this;
   reader.onloadend =()=> {
     
     this.image = reader.result;
  
   }
   reader.readAsDataURL(files);
 }
 onSubmitsave() {
if (typeof this.image === 'undefined') {
  let snackBarRef = this.snackBar.open("App name, Short name, email1, address and logo are required", 'Dismiss', {
    duration: 3000
  }) 
}
// console.log(this.image)
this.Jarwis.addappsetting({formdata:this.submitForm.value,image:this.image}).subscribe(
  data => this.handleResponse(data),
 error => this.handleError(error)
);

  
 
}
onSubmitupdate() {
  //  console.log(this.submitForm.value)
    this.Jarwis.updateappsetting({formdata:this.submitForm.value,image:this.image}).subscribe(
      data => this.handleResponse(data),
     error => this.handleError(error)
   );
   
  }
handleError(error) {
  let snackBarRef = this.snackBar.open("Not Save", 'Dismiss', {
    duration: 3000
  }) 
}
handleResponse(data) {  
  let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
    duration: 2000
  }) 
  this.ngOnInit()
}
  }

// }
