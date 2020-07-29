import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {

  public _userForm: FormGroup;
  image: any;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EditeventComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
   uploadFile(event){
    let files =event.target.files[0];
    let reader = new FileReader();
    let vm = this;
    reader.onloadend =()=> {
      
      this.image = reader.result;
   
    }
    reader.readAsDataURL(files);
  }
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
  ngOnInit() {
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
    event_name:[this.data.user.event_name],
    content:[this.data.user.content],
  subject:[this.data.user.subject],
  start_date:[this.data.user.start_date],
  start_time:[this.data.user.start_time],
  end_date:[this.data.user.end_date],
  end_time:[this.data.user.end_time],
  address:[this.data.user.address]
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close({formdata:this._userForm.value,image:this.image})

    // this.ngOnInit()
  }

}
