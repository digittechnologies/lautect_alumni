import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public form = {
    image_cate_name: null,
    about: null,
   
  };
  public form2 = {
    image_name: null,
    image_cat_id:null,
    video: null,
    image:null
  };
  public error:any;
  image: any;
  eventsch: any;
  gallery: any;
  gallerycat: any;
  url: any;
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
  onSubmitImage() {
    if (typeof this.image === 'undefined') {
      let snackBarRef = this.snackBar.open(" File are required", 'Dismiss', {
        duration: 3000
      }) 
    }else{
      this.Jarwis.addgallery({formdata:this.form2,image:this.image}).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
    
  }
  onSubmitVideo() {
    console.log(this.form2.video)
    if ( this.form2.video === null) {
      let snackBarRef = this.snackBar.open(" Video link are required", 'Dismiss', {
        duration: 3000
      }) 
    }else{
      this.Jarwis.addgallery({formdata:this.form2,image:this.image}).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
  }
  handleResponse(data) {
    this.form2.image_name="";
    this.form2.video="";
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
  onSubmit1() {
    this.Jarwis.addgallerycat(this.form).subscribe(
      data => this.handleResponse2(data),
      error => this.handleError2(error)
    );
  }
  handleResponse2(data) {
    this.form.image_cate_name="";
    this.form.about="";
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
    this.Jarwis.getgallerycat().subscribe(
      data=>{
      this.gallerycat = data; 

      
      }
      
    )

    this.Jarwis.getgallery().subscribe(
      data=>{
      this.gallery = data; 

      
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
