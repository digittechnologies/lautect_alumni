import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  userdata: any;
  user: any;
  count: any;

  constructor(private Jarwis: JarwisService,public snackBar: MatSnackBar, 
    private router: Router, private dialog?: MatDialog
    ) { }
    isPopupOpened = true;

  ngOnInit() {
    this.Jarwis.getadmin().subscribe(
      data=>{
      this.userdata = data; 
      this.user=this.userdata.user
      this.count=this.userdata.usercount
    //  console.log(this.user)

      
      }
    )
  }
  deleteadmin(id: number) {
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
