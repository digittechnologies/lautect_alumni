import { Component, OnInit, Inject  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-authmodel',
  templateUrl: './authmodel.component.html',
  styleUrls: ['./authmodel.component.css']
})
export class AuthmodelComponent implements OnInit {

  public _userForm: FormGroup;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<AuthmodelComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [''],
      fullname: [ ''],
     dept:[''],
     matric_no:['']
    });

    this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      fullname: [ this.data.user.fullname],
      matric_no: [this.data.user.matric_no ],
     dept:[this.data.user.dept],
     
    });
  }
  
  // }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close(this._userForm.value)
    // this.ngOnInit()
  }
}
