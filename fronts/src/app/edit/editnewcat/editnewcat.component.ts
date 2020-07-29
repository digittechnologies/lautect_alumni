import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-editnewcat',
  templateUrl: './editnewcat.component.html',
  styleUrls: ['./editnewcat.component.css']
})
export class EditnewcatComponent implements OnInit {

  
  public _userForm: FormGroup;
  image: any;
  gallerycat:any;
  constructor(private _formBuilder:FormBuilder, private Jarwis: JarwisService,private dialogRef: MatDialogRef<EditnewcatComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
  
 
  ngOnInit() {
   
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      blog_cat_name:[this.data.user.blog_cat_name],
      description:[this.data.user.description],
  
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close(this._userForm.value)

    // this.ngOnInit()
  }
}
