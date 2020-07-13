import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-event-programs',
  templateUrl: './event-programs.component.html',
  styleUrls: ['./event-programs.component.css']
})
export class EventProgramsComponent implements OnInit {

  public form = {
    event_name: null,
    subject: null,
    content:null,
    start_date:null,
    start_time:null,
    end_date:null,
    end_time:null,
    address:null,
  };
  public form2 = {
    schedule_name: null,
    title: null,
    content:null,
    start_date:null,
    start_time:null,
    end_date:null,
    end_time:null,
   speaker:null,
  };
  public error:any;
  image: any;
  eventsch: any;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    public snackBar: MatSnackBar, 
  ) { }
event:any;

uploadFile(event){
  let files =event.target.files[0];
  let reader = new FileReader();
  let vm = this;
  reader.onloadend =()=> {
    
    this.image = reader.result;
 
  }
  reader.readAsDataURL(files);
}
  onSubmit1() {
    this.Jarwis.addevent({formdata:this.form,image:this.image}).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.event_name="";
    this.form.subject="";
    this.form.content="";
    this.form.end_date="";
    this.form.end_time="";
    this.form.start_date="";
    this.form.start_time="";
    this.form.address="";
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
  onSubmit2() {
    this.Jarwis.addeventsch(this.form2).subscribe(
      data => this.handleResponse2(data),
      error => this.handleError2(error)
    );
  }
  handleResponse2(data) {
    this.form2.schedule_name="";
    this.form2.title="";
    this.form2.content="";
    this.form2.end_date="";
    this.form2.end_time="";
    this.form2.start_date="";
    this.form2.start_time="";
    this.form2.speaker="";
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
    this.Jarwis.getevent().subscribe(
      data=>{
      this.event = data; 

      
      }
      
    )

    this.Jarwis.geteventsch().subscribe(
      data=>{
      this.eventsch = data; 

      
      }
      
    )
  }

}
