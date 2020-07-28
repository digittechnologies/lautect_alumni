import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { AuthmodelComponent } from '../../edit/authmodel/authmodel.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  public form = {
    search: null,
    
  };
auth:any;
filterString = "";
  authdata: any;
  count: any;
  isPopupOpened = true;
  auths: any;
  constructor(private Jarwis: JarwisService,
    public snackBar: MatSnackBar, 
    private router: Router,
    private dialog?: MatDialog, ) { }

  ngOnInit() {
    this.Jarwis.getauth().subscribe(
      data=>{
      this.authdata = data; 
      this.auth=this.authdata.auth
    this.count=this.authdata.authcount
  //  console.log(this.user)
    //  console.log(this.auth)

      
      }
    )
// this.onFilterChange();
  }
  onFilterChange() {
    //  console.log(this.auths)
    this.Jarwis.getauth().subscribe(
      data=>{
      this.authdata = data; 
      this.auths=this.authdata.auth
    this.count=this.authdata.authcount
    this.auth=this.auths.filter((cate) => this.isMatch(cate));
  //  console.log(this.user)
    //  console.log(this.auth)

      
      }
    )
    
  
  }
    
  
  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().indexOf(this.filterString) > -1
    }
  }
  onSubmitsearch(){
    // this.router.navigate(['search/'+this.form.search+'']);
    this.Jarwis.authsearch(this.form).subscribe(
      data =>  {
        this.authdata = data; 
        this.auth=this.authdata
       console.log(this.auth)
      },
      error => {
        let snackBarRef = this.snackBar.open("Not Search ", 'Dismiss', {
          duration: 2000
        }) 
      }
      );
    // console.log(this.form)
  }
  userprofile(id){
    // console.log(id)
    this.router.navigate(['userprofile/'+id+'']);
    this.ngOnInit()
  }
  addauth() {

    this.isPopupOpened = true;
    
   const dialogRef = this.dialog.open(AuthmodelComponent, {
     minWidth: '50%',
   
     
   });
  
   

    dialogRef.afterClosed().subscribe(result => {
     this.isPopupOpened = false;
     if(result == 'undefined'){

     }else{
      this.Jarwis.addauth(result).subscribe(
        data =>  {
          let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
            duration: 2000
          }) 
        },
        error => {
          let snackBarRef = this.snackBar.open("Not Save ", 'Dismiss', {
            duration: 2000
          }) 
        }
        );
      console.log(result)
      //  this.ngOnInit()
     }
     this.ngOnInit()
    });
        
  }
  editauth(id) {
    console.log(id)
        this.isPopupOpened = true;
        this.Jarwis.getauth().subscribe(
          data=>{
          this.authdata = data; 
          this.auth=this.authdata.auth
        this.count=this.authdata.authcount
      //  console.log(this.user)
        //  console.log(this.auth)
    
          
          }
        )
        // console.log(this.user)
        let user = this.auth.filter(c => c.id == id);
        // console.log(us);
        // console.log(user[0])
       const dialogRef = this.dialog.open(AuthmodelComponent, {
         minWidth: '60%',
         data: {user: user[0]}
         
       });
      
       
    
        dialogRef.afterClosed().subscribe(result => {
         this.isPopupOpened = false;
         if(result == 'undefined'){
    
         }else{
          this.Jarwis.authupdate(result).subscribe(
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
          // console.log(result)
          
         }
        
        });
            
      }

      
  
      deleteauth(id: number) {
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
              this.Jarwis.authdelete(result).subscribe(
                data =>  {
                  if(data == 0){

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
