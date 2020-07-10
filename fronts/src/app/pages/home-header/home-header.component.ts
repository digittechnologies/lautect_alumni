import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  public form = {
    component1: null,
    component2: null,
    component3:null,
  };
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }
header:any;
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
    this.Jarwis.addhomeheader({formdata:this.form,image:this.image}).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.component1="";
    this.form.component2="";
    this.form.component3="";
    this.ngOnInit()
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
    this.Jarwis.gethomeheader().subscribe(
      data=>{
      this.header = data; 
    //  console.log(this.usercat)

      
      }
    )
  }
}
