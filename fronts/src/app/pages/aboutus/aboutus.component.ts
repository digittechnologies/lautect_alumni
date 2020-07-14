import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  public form = {
    about_name: null,
    title: null,
    content:null,
    year:null
  };
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router
  ) { }
aboutus:any;
image:any;
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
    if (typeof this.image === 'undefined') {
      let snackBarRef = this.snackBar.open(" File are required", 'Dismiss', {
        duration: 3000
      }) 
    }
    this.Jarwis.addaboutus({formdata:this.form,imag:this.image}).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.about_name="";
    this.form.title="";
    this.form.year="";
    this.form.content="";
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
    this.Jarwis.getaboutus().subscribe(
      data=>{
      this.aboutus = data; 
    //  console.log(this.usercat)

      
      }
    )
  }

}
