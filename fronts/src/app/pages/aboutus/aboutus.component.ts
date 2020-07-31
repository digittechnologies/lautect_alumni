import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';
import { EditaboutusComponent } from '../../edit/editaboutus/editaboutus.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  public form = {
    about_cat_id: null,
    title: null,
    content:null,
    year:null,
   
  };
 
  public error:any;
  aboutcat: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router,
    private dialog?: MatDialog,
    ) { }
    isPopupOpened = true;
aboutus:any;
image:any;
app:any;
url:any;
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
    this.form.about_cat_id="";
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

  editabout(id){
    this.isPopupOpened = true;
    let home = this.aboutus.filter(c => c.id == id);
    console.log(home)
    const dialogRef = this.dialog.open(EditaboutusComponent, {
      minWidth: '60%',
      data: {user: home[0]}
      
    });
   
    
 
     dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      if(result == 'undefined'){
 
      }else{
       this.Jarwis.aboutupdate(result).subscribe(
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
 
  ngOnInit() {
    this.Jarwis.getaboutcat().subscribe(
      data=>{
      this.aboutcat = data; 
    //  console.log(this.usercat)

      
      }
    )
    this.Jarwis.getaboutus().subscribe(
      data=>{
      this.aboutus = data; 
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
  deleteabout(id: number) {
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
          this.Jarwis.userdelete(result).subscribe(
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
