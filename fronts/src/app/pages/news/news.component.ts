import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public form = {
    blog_cat_name: null,
    description: null,
    
  };
  public form2 = {
    blog_name: null,
    blog_title: null,
    content1:null,
    content2:null,
    content3:null,
    link:null,
    category_id:null,
   
  };
  public error:any;
  image: any;
  news: any;
  app: any;
  url: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    public snackBar: MatSnackBar, 
  ) { }
newcat:any;

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
   
    this.Jarwis.addnewcat(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.blog_cat_name="";
    this.form.description="";
   
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
    }else{
      this.Jarwis.addnews({formdata:this.form2,image:this.image}).subscribe(
        data => this.handleResponse2(data),
        error => this.handleError2(error)
      );
    }
    
  }
  handleResponse2(data) {
    this.form2.blog_name="";
    this.form2.blog_title="";
    this.form2.content1="";
    this.form2.content2="";
    this.form2.content3="";
    this.form2.link="";
    this.form2.category_id="";
    
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
    this.Jarwis.getnewcat().subscribe(
      data=>{
      this.newcat = data; 

      
      }
      
    )

    this.Jarwis.getnews().subscribe(
      data=>{
      this.news= data; 

      
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
