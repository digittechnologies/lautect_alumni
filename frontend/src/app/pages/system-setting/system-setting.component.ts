import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";

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
  constructor(private formBuilder: FormBuilder,private Token: TokenService, private Jarwis: JarwisService,private router: Router) { }
  public response:any;

  ngOnInit() {
    this.submitForm = this.formBuilder.group(
     
      {
        app_name: [''],
       short_name: [''],
       email1:[''],
       email2:[''],
       facebook:[''],
       phone_number:[''],
       instagram:[''],
       youtube:[''],
       linkedin:[''],
       address:[''],
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
   
 
  })
  
 }
  }

// }
