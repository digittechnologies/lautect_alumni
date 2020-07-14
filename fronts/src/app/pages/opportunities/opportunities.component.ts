import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {

  public form = {
    car_cat_name: null,
    decription: null,
    
  };
  public form2 = {
    car_name: null,
    title: null,
    content:null,
    location:null,
    address:null,
    information:null,
   car_cat_id:null,
  };
  public error:any;
  image: any;
  careers: any;
  career: any;
  app: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    public snackBar: MatSnackBar, 
  ) { }


uploadFile(event){
  let files =event.target.files[0];
  let reader = new FileReader();
  let vm = this;
  reader.onloadend =()=> {
    
    this.image = reader.result;
 
  }
  reader.readAsDataURL(files);
}
  onSubmit1() {
   
    this.Jarwis.addcareercat(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.car_cat_name="";
    this.form.decription="";
    let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
      duration: 2000
    })   
    this.ngOnInit()
  }

  handleError(error) {
    let snackBarRef = this.snackBar.open("Not Save", 'Dismiss', {
      duration: 3000
    }) 
    console.log(error);
    // this.error = error.error.errors;
  }
  onSubmit2() {
    if (typeof this.image === 'undefined') {
      let snackBarRef = this.snackBar.open(" File are required", 'Dismiss', {
        duration: 3000
      }) 
    }
    this.Jarwis.addcareer({formdata:this.form2,image:this.image}).subscribe(
      data => this.handleResponse2(data),
      error => this.handleError2(error)
    );
  }
  handleResponse2(data) {
    this.form2.car_name="";
    this.form2.title="";
    this.form2.content="";
    this.form2.information="";
    this.form2.location="";
    this.form2.address="";
    let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
      duration: 2000
    })   
    this.ngOnInit()
  }

  handleError2(error) {
    let snackBarRef = this.snackBar.open("Not Save", 'Dismiss', {
      duration: 3000
    }) 
  }
  ngOnInit() {
    this.Jarwis.getcareercat().subscribe(
      data=>{
      this.career = data; 

      
      }
      
    )

    this.Jarwis.getcareer().subscribe(
      data=>{
      this.careers = data; 

      
      }
      
    )
    this.Jarwis.getappsetting().subscribe(
      data=>{
      this.app = data;
      
      }
    )
  }
}
