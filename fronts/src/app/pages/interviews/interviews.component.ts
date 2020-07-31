import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../services/auth.service';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { EditinterviewComponent } from '../../edit/editinterview/editinterview.component';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  public form = {
    inter_name: null,
    inter_position: null,
    link:null,
    content:null,
  };
  app: any;
  url: any;
  image: any;
  inter: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    public snackBar: MatSnackBar, 
    private router: Router,
    private jwtHelper: JwtHelperService,
    private Auth: AuthService,
    private dialog?: MatDialog,
    ) { }
    isPopupOpened = true;
cat:any;
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
    // if (typeof this.image === 'undefined') {
    //   let snackBarRef = this.snackBar.open(" File are required", 'Dismiss', {
    //     duration: 3000
    //   }) 
    // }else{
    this.Jarwis.addinterview({formdata:this.form,image:this.image}).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    // }
  }
  handleResponse(data) {
    this.form.inter_name="";
    this.form.inter_position="";
    this.form.content="";
    this.form.link="";
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
    
   
    this.Jarwis.getinterview().subscribe(
      data=>{
      this.inter = data; 
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
  editinter(id){
    this.isPopupOpened = true;
    let home = this.inter.filter(c => c.id == id);
    console.log(home)
    const dialogRef = this.dialog.open(EditinterviewComponent, {
      minWidth: '60%',
      data: {user: home[0]}
      
    });
   
    
 
     dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      if(result == 'undefined'){
 
      }else{
       this.Jarwis.interviewupdate(result).subscribe(
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
  deleteinter(id: number) {
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
          this.Jarwis.interviewdelete(result).subscribe(
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
