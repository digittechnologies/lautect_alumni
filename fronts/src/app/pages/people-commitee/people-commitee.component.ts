import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-people-commitee',
  templateUrl: './people-commitee.component.html',
  styleUrls: ['./people-commitee.component.css']
})
export class PeopleCommiteeComponent implements OnInit {
  public form = {
    category_id: null,
    about: null,
    name:null,
    position:null,
    link_id:null,
  };
  public error = [];
  app: any;
  url: any;
  people: any;
  image: string | ArrayBuffer;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router,
    private jwtHelper: JwtHelperService,
    private Auth: AuthService,
  ) { }
cat:any;
uploadFile(event){
  let files =event.target.files[0];
  let reader = new FileReader();
  let vm = this;
  reader.onloadend =()=> {
    
    this.image = reader.result;
 
  }
  reader.readAsDataURL(files);
}
  onSubmit() {
    // if (typeof this.image === 'undefined') {
    //   let snackBarRef = this.snackBar.open(" File are required", 'Dismiss', {
    //     duration: 3000
    //   }) 
    // }else{
      this.Jarwis.addpeople({formdata:this.form,image:this.image}).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    // }
    
  }
 
  handleResponse(data) {
    this.form.name="";
    this.form.link_id="";
    this.form.about="";
    this.form.position="";
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
    this.Jarwis.getpeople().subscribe(
      data=>{
      this.people = data; 
    //  console.log(this.usercat)

      
      }
    )
  }
}
