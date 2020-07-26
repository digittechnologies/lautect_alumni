import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { EdituserComponent } from '../../edit/edituser/edituser.component';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  isPopupOpened = true;
  public form = {
    member_cat_name: null,
    about: null,
  };
  public error = [];
  userdata: any;
  count: any;
  app: any;
  url: any;
response:any;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router,
    private dialog?: MatDialog, 
  ) { }
user:any;
  onSubmit() {
    this.Jarwis.addusercat(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.about="";
    this.form.member_cat_name="";
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
    this.Jarwis.getmember().subscribe(
      data=>{
      this.userdata = data; 
      this.user=this.userdata.user
      this.count=this.userdata.usercount
    //  console.log(this.user)

      
      }
    )
    this.Jarwis.getappsetting().subscribe(
      data=>{
      this.app = data;
      this.url=this.app.url;
      }
    )
  }
  userprofile(id){
    // console.log(id)
    this.router.navigate(['userprofile/'+id+'']);
    this.ngOnInit()
  }
  edituser(id: number) {
// console.log(id)
    this.isPopupOpened = true;
    this.Jarwis.getmember().subscribe(
      data=>{
      this.userdata = data; 
      this.user=this.userdata.user
      this.count=this.userdata.usercount
    //  console.log(this.user)

      
      }
    ) 
    
    // console.log(this.user)
    let user = this.user.filter(c => c.id == id);
    // console.log(us);
    // console.log(user[0])
   const dialogRef = this.dialog.open(EdituserComponent, {
     minWidth: '60%',
     data: {user: user[0]}
     
   });
  
   

    dialogRef.afterClosed().subscribe(result => {
     this.isPopupOpened = false;
     if(result == 'undefined'){

     }else{
      this.Jarwis.userupdate(result).subscribe(
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
      // console.log(result)
       this.ngOnInit()
     }
     this.ngOnInit()
    });
        
  }



  deleteuser(id: number) {
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
              let snackBarRef = this.snackBar.open("Delete successfully", 'Dismiss', {
                duration: 2000
              }) 
            },
            error => {
              let snackBarRef = this.snackBar.open("Not Delete ", 'Dismiss', {
                duration: 2000
              }) 
            }
            );
          // console.log(result)
           this.ngOnInit()
         }
         this.ngOnInit()
        });
      }
}
