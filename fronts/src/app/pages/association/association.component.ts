import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';
import { EditassoComponent } from '../../edit/editasso/editasso.component';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

  public form = {
    asso_name: null,
    // about: null,
  };
  public formu = {
    asso_name: null,
    id: null,
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
asso:any;
  onSubmit() {
    this.Jarwis.addasso(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
      duration: 2000
    })  
    this.form.asso_name="";
    this.ngOnInit()
  }

  handleError(error) {
    let snackBarRef = this.snackBar.open("Not Save", 'Dismiss', {
      duration: 3000
    }) 
  }

  ngOnInit() {
    this.Jarwis.getasso().subscribe(
      data=>{
      this.asso = data; 
    //  console.log(this.asso)

      
      }
    )
  }
  editasso(id){
    console.log(this.asso)
    this.isPopupOpened = true;
    let home = this.asso.filter(c => c.id == id);
    const dialogRef = this.dialog.open(EditassoComponent, {
      minWidth: '60%',
      data: {user: home[0]}
      
    });
   
    
 
     dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      if(result == 'undefined'){
 
      }else{
       this.Jarwis.assoupdate(result).subscribe(
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
 
  deleteasso(id: number) {
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
          this.Jarwis.assodelete(result).subscribe(
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
