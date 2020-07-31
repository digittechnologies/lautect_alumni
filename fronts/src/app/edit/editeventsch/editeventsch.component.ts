import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editeventsch',
  templateUrl: './editeventsch.component.html',
  styleUrls: ['./editeventsch.component.css']
})
export class EditeventschComponent implements OnInit {

  public _userForm: FormGroup;
  image: any;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EditeventschComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
  
 
  ngOnInit() {
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
    schedule_name:[this.data.user.schedule_name],
    content:[this.data.user.content],
  speaker:[this.data.user.speaker],
  start_date:[this.data.user.start_date],
  start_time:[this.data.user.start_time],
  end_date:[this.data.user.end_date],
  end_time:[this.data.user.end_time],
  title:[this.data.user.title]
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close(this._userForm.value)

    // this.ngOnInit()
  }
}
