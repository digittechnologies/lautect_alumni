import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { DeletemodalComponent } from '../../delete/deletemodal/deletemodal.component';
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  public form = {
    component1: null,
    component2: null,
    component3:null,
    id:null,
    home_image:null
  };
  public form2 = {
    title: null,
    content: null,
    id:null,
    image:null
  };

  public error = [];
  url: any;
  header1: any;
  header2: any;
  about_header: any;
  member_header: any;
  event_header: any;
  gallery_header: any;
  job_header: any;
  scholaship_header: any;
  committee_header: any;
  news_header: any;
  constitution_header: any;
  capacity_header: any;
  contact_header: any;

  isPopupOpened = true;
  auths: any;
  about_title: any;
  about_content: any;
  about_image: any;
  member_title: any;
  member_content: any;
  member_image: any;
  event_title: any;
  event_content: any;
  event_image: any;
  gallery_title: any;
  gallery_content: any;
  gallery_image: any;
  job_title: any;
  job_content: any;
  job_image: any;
  scholaship_title: any;
  scholaship_content: any;
  scholaship_image: any;
  committee_title: any;
  committee_content: any;
  constitution_content: any;
  constitutionabout_image: any;
  constitution_title: any;
  committee_image: any;
  news_content: any;
  news_title: any;
  news_image: any;
  capacity_content: any;
  capacity_image: any;
  capacity_title: any;
  contact_content: any;
  contact_title: any;
  contact_image: any;
  content_id: any;
  capacity_id: any;
  constitution_id: any;
  constitution_image: any;
  news_id: any;
  scholaship_id: any;
  job_id: any;
  committee_id: any;
  gallery_id: any;
  event_id: any;
  member_id: any;
  about_id: any;
  constructor(private Jarwis: JarwisService,
    public snackBar: MatSnackBar, 
    private router: Router,
    private dialog?: MatDialog, ) { }
header:any;
image:any;
app:any;
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
    }else{
      this.Jarwis.addhomeheader({formdata:this.form,image:this.image}).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
   
  }
  oneditheader(id){
    console.log(id)
    let home = this.header1.home.filter(c => c.id == id);

    this.form.component1= home[0].component1;
    this.form.component2= home[0].component2;
    this.form.component3= home[0].component3;
    this.form.id= home[0].id;
  }
  onheader(id){
    this.form2.title= this.header1.headers[id].title;
    this.form2.content= this.header1.headers[id].content;
    this.form2.id= this.header1.headers[id].id;
  }
  onupdateSubmit() {
    console.log(this.form);
      this.Jarwis.updatehomeheader({formdata:this.form,image:this.image}).subscribe(
        data => this.handleResponseu(data),
        error => this.handleErroru(error)
      );
  
   
  }
  handleResponseu(data) {
   
    let snackBarRef = this.snackBar.open("Update successfully", 'Dismiss', {
      duration: 2000
    })  
    this.ngOnInit()
  }

  handleErroru(error) {
    let snackBarRef = this.snackBar.open("Not Update", 'Dismiss', {
      duration: 3000
    }) 
  }
  onUpdate() {
    
    this.Jarwis.addheader({formdata:this.form2,image:this.image}).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.form.component1="";
    this.form.component2="";
    this.form.component3="";
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
  deleteheader(id: number) {
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
          this.Jarwis.headerdelete(result).subscribe(
            data =>  {
              if (data == 0){
               
              }else{
                let snackBarRef = this.snackBar.open("Delete successfully", 'Dismiss', {
                  duration: 2000
                }) 
              }
             
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
  ngOnInit() {
    this.Jarwis.gethomeheader().subscribe(
      data=>{
      this.header1 = data; 
      this.header= this.header1.home;
      this.about_header= this.header1.headers[5];
      this.about_title=this.about_header.title;
      this.about_content=this.about_header.content;
      this.about_image=this.about_header.image;
      this.about_id=this.about_header.id;

      this.member_header= this.header1.headers[6];
      this.member_title=this.member_header.title;
      this.member_content=this.member_header.content;
      this.member_image=this.member_header.image;
      this.member_id=this.member_header.id;

      this.event_header= this.header1.headers[7];
      this.event_title=this.event_header.title;
      this.event_content=this.event_header.content;
      this.event_image=this.event_header.image;
      this.event_id=this.event_header.id;

      this.gallery_header= this.header1.headers[8];
      this.gallery_title=this.gallery_header.title;
      this.gallery_content=this.gallery_header.content;
      this.gallery_image=this.gallery_header.image;
      this.gallery_id=this.gallery_header.id;

      this.job_header= this.header1.headers[9];
      this.job_title=this.job_header.title;
      this.job_content=this.job_header.content;
      this.job_image=this.job_header.image;
      this.job_id=this.job_header.id;

      this.scholaship_header= this.header1.headers[10];
      this.scholaship_title=this.scholaship_header.title;
      this.scholaship_content=this.scholaship_header.content;
      this.scholaship_image=this.scholaship_header.image;
      this.scholaship_id=this.scholaship_header.id;

      this.committee_header= this.header1.headers[11];
      this.committee_title=this.committee_header.title;
      this.committee_content=this.committee_header.content;
      this.committee_image=this.committee_header.image;
      this.committee_id=this.committee_header.id;

      this.news_header= this.header1.headers[12];
      this.news_title=this.news_header.title;
      this.news_content=this.news_header.content;
      this.news_image=this.news_header.image;
      this.news_id=this.news_header.id;

      this.constitution_header= this.header1.headers[13];
      this.constitution_title=this.constitution_header.title;
      this.constitution_content=this.constitution_header.content;
      this.constitution_image=this.constitution_header.image;
      this.constitution_id=this.constitution_header.id;

      this.capacity_header= this.header1.headers[14];
      this.capacity_title=this.capacity_header.title;
      this.capacity_content=this.capacity_header.content;
      this.capacity_image=this.capacity_header.image;
      this.capacity_id=this.capacity_header.id;

      this.contact_header= this.header1.headers[15];
      this.contact_title=this.contact_header.title;
      this.contact_content=this.contact_header.content;
      this.contact_image=this.contact_header.image;
      this.content_id=this.contact_header.id

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
}
