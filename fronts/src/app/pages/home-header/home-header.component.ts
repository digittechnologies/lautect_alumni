import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
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
  public form2 = {
    title: null,
    content: null,
    id:null
  };

  public error = [];
  url: any;
  header1: any;
  header2: any;
  about_header: any;
  member_header: any;
  event_header: any;
  gallery_header: any;
  job_header: any;
  scholaship_header: any;
  committee_header: any;
  news_header: any;
  constitution_header: any;
  capacity_header: any;
  contact_header: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router
  ) { }
header:any;
image:any;
app:any;
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
    this.Jarwis.addhomeheader({formdata:this.form,image:this.image}).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  onheader(id){
    this.form2.title= this.header1.headers[id].title;
    this.form2.content= this.header1.headers[id].content;
    this.form2.id= this.header1.headers[id].id;
  }

  onUpdate() {
    if (typeof this.image === 'undefined') {
      let snackBarRef = this.snackBar.open(" File are required", 'Dismiss', {
        duration: 3000
      }) 
    }
    this.Jarwis.addheader({formdata:this.form2,image:this.image}).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.form.component1="";
    this.form.component2="";
    this.form.component3="";
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
    this.Jarwis.gethomeheader().subscribe(
      data=>{
      this.header1 = data; 
      this.header= this.header1.home;
      this.about_header= this.header1.headers[5];
      this.member_header= this.header1.headers[6];
      this.event_header= this.header1.headers[7];
      this.gallery_header= this.header1.headers[8];
      this.job_header= this.header1.headers[9];
      this.scholaship_header= this.header1.headers[10];
      this.committee_header= this.header1.headers[11];
      this.news_header= this.header1.headers[12];
      this.constitution_header= this.header1.headers[13];
      this.capacity_header= this.header1.headers[14];
      this.contact_header= this.header1.headers[15];

    //  console.log(this.usercat)
      
      }
    )

    this.Jarwis.getappsetting().subscribe(
      data=>{
      this.app = data;
      this.url=this.app.url;
      }
    )
  }
}
