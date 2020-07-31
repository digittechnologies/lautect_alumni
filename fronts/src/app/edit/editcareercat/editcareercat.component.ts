import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-editcareercat',
  templateUrl: './editcareercat.component.html',
  styleUrls: ['./editcareercat.component.css']
})
export class EditcareercatComponent implements OnInit {
 
  public _userForm: FormGroup;
  image: any;
  gallerycat:any;
  constructor(private _formBuilder:FormBuilder, private Jarwis: JarwisService,private dialogRef: MatDialogRef<EditcareercatComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
  
 
  ngOnInit() {
   
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      car_cat_name:[this.data.user.car_cat_name],
      decription:[this.data.user.decription],
  
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close(this._userForm.value)

    // this.ngOnInit()
  }
}
