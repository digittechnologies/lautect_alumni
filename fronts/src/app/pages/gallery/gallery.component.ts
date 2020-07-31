import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { EditgallerycatComponent } from '../../edit/editgallerycat/editgallerycat.component';
import { EditgalleryComponent } from '../../edit/editgallery/editgallery.component';
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
    private dialog?: MatDialog,
    ) { }
    isPopupOpened = true;


 
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
  deletegallery(id: number) {
    // console.log(id)
        this.isPopupOpened = true;
        
       const dialogRef = this.dialog.open(DeletemodalComponent, {
         minWidth: '50%',
         data: {id}
         
       });
      
       
    
        dialogRef.afterClosed().subscribe(result => {
         this.isPopupOpened = false;
         if(result == 'undefined'){
    
         }else{
          this.Jarwis.gallerydelete(result).subscribe(
            data =>  {
              if (data == 0){
               
              }else{
              let snackBarRef = this.snackBar.open("Delete successfully", 'Dismiss', {
                duration: 2000
              }) 
              this.ngOnInit()
            }
            },
            error => {
              let snackBarRef = this.snackBar.open("Not Delete ", 'Dismiss', {
                duration: 2000
              }) 
            }
            );
          // console.log(result)
        
         }
       
        });
      }
      editgallery(id){
        this.isPopupOpened = true;
        let home = this.gallery.filter(c => c.id == id);
        console.log(home)
        const dialogRef = this.dialog.open(EditgalleryComponent, {
          minWidth: '60%',
          data: {user: home[0]}
          
        });
       
        
     
         dialogRef.afterClosed().subscribe(result => {
          this.isPopupOpened = false;
          if(result == 'undefined'){
     
          }else{
           this.Jarwis.galleryupdate(result).subscribe(
             data =>  {
               if(data == 0){
    
               }else{
                 let snackBarRef = this.snackBar.open("Updated successfully", 'Dismiss', {
                   duration: 2000
                 }) 
                 this.ngOnInit()
               }
             
             },
             error => {
               let snackBarRef = this.snackBar.open("Not Update ", 'Dismiss', {
                 duration: 2000
               }) 
             }
             );
           console.log(result)
           
          }
         
         });
      }
      editgallerycat(id){
        this.isPopupOpened = true;
        let home = this.gallerycat.filter(c => c.id == id);
        console.log(home)
        const dialogRef = this.dialog.open(EditgallerycatComponent, {
          minWidth: '60%',
          data: {user: home[0]}
          
        });
       
        
     
         dialogRef.afterClosed().subscribe(result => {
          this.isPopupOpened = false;
          if(result == 'undefined'){
     
          }else{
           this.Jarwis.gallerycatupdate(result).subscribe(
             data =>  {
               if(data == 0){
    
               }else{
                 let snackBarRef = this.snackBar.open("Updated successfully", 'Dismiss', {
                   duration: 2000
                 }) 
                 this.ngOnInit()
               }
             
             },
             error => {
               let snackBarRef = this.snackBar.open("Not Update ", 'Dismiss', {
                 duration: 2000
               }) 
             }
             );
           console.log(result)
           
          }
         
         });
      }
      deletegallerycat(id: number) {
        // console.log(id)
            this.isPopupOpened = true;
            
           const dialogRef = this.dialog.open(DeletemodalComponent, {
             minWidth: '50%',
             data: {id}
             
           });
          
           
        
            dialogRef.afterClosed().subscribe(result => {
             this.isPopupOpened = false;
             if(result == 'undefined'){
        
             }else{
              this.Jarwis.gallerycatdelete(result).subscribe(
                data =>  {
                  if (data == 0){
                   
                  }else{
                  let snackBarRef = this.snackBar.open("Delete successfully", 'Dismiss', {
                    duration: 2000
                  }) 
                  this.ngOnInit()
                }
                },
                error => {
                  let snackBarRef = this.snackBar.open("Not Delete ", 'Dismiss', {
                    duration: 2000
                  }) 
                }
                );
              // console.log(result)
            
             }
           
            });
          }
}
