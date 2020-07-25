import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { EdituserComponent } from '../../edit/edituser/edituser.component';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';
declare var home: any;
declare var sidenav: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  userdata: any;
  user: any;
  count: any;
  admincount: any;
  careers: any;
  carcount: any;
  news: any;
  newcount: any;
  adminuser: any;
  app: any;
  url: any;
  isPopupOpened = true;
  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router,
    private dialog?: MatDialog, 
  ) { }

  ngOnInit() {
    console.log('here')
    this.Jarwis.getnews().subscribe(
      data=>{
      this.news= data; 
this.newcount=this.news.length
      
      }
      
    )
    this.Jarwis.getcareer().subscribe(
      data=>{
      this.careers = data; 
        this.carcount=this.careers.length
      
      }
      
    )
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
      this.Jarwis.getadmin().subscribe(
        data=>{
        this.userdata = data; 
        this.adminuser=this.userdata.user
        this.admincount=this.userdata.usercount
      //  console.log(this.user)
  
        
        }
      )
      // this.router.navigate(['search']);
      
    new home();
    new sidenav();
  
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
