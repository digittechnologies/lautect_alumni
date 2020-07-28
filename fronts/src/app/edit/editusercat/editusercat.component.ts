import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editusercat',
  templateUrl: './editusercat.component.html',
  styleUrls: ['./editusercat.component.css']
})
export class EditusercatComponent implements OnInit {
  
 
  public _userForm: FormGroup;
  image: any;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EditusercatComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
  
  ngOnInit() {
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
    about:[this.data.user.about],
    cat_name:[this.data.user.cat_name],
  
    
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close(this._userForm.value)
    // this.ngOnInit()
  }

}
