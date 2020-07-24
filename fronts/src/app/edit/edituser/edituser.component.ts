import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  public _userForm: FormGroup;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EdituserComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      name: [ this.data.user.name],
      about: [this.data.user.about ],
    dob: [ this.data.user.dob],
     phone: [ this.data.user.phone  ],
     biograph:[this.data.user.biograph],
     dept:[this.data.user.dept],
     address:[this.data.user.address],
     birthplace:[this.data.user.birthplace],
     website:[this.data.user.website],
     occupation:[this.data.user.occupation],
     hobbies:[this.data.user.hobbies],
    facebook :[this.data.user.facebook],
    instagram:[this.data.user.instagram],
    gender:[this.data.user.gender],
    title:[this.data.user.title],
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close(this._userForm.value)
    // this.ngOnInit()
  }
}
