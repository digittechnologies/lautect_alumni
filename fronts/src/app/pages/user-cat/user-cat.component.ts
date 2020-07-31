import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';
import { EditusercatComponent } from '../../edit/editusercat/editusercat.component';

@Component({
  selector: 'app-user-cat',
  templateUrl: './user-cat.component.html',
  styleUrls: ['./user-cat.component.css']
})
export class UserCatComponent implements OnInit {

  public form = {
    cat_name: null,
    about: null,
  };
 
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router,
    private dialog?: MatDialog,
  ) { }
  isPopupOpened = true;
usercat:any;
  onSubmit() {
    this.Jarwis.addusercat(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.about="";
    this.form.cat_name="";
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
  deleteusercat(id: number) {
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
          this.Jarwis.usercatdelete(result).subscribe(
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
      editusercat(id){
        // console.log(this.usercat)
        this.isPopupOpened = true;
        let home = this.usercat.filter(c => c.id == id);
    
        const dialogRef = this.dialog.open(EditusercatComponent, {
          minWidth: '60%',
          data: {user: home[0]}
          
        });
       
        
     
         dialogRef.afterClosed().subscribe(result => {
          this.isPopupOpened = false;
          if(result == 'undefined'){
     
          }else{
           this.Jarwis.usercatupdate(result).subscribe(
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
    this.Jarwis.getusercat().subscribe(
      data=>{
      this.usercat = data; 
    //  console.log(this.usercat)

      
      }
    )
  }

}
