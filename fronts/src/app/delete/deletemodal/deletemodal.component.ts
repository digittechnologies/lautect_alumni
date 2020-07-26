import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.css']
})
export class DeletemodalComponent implements OnInit {
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<DeletemodalComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
  ngOnInit() {
    console.log(this.data);
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close(this.data)
    // this.ngOnInit()
  }
}
