import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-editgallerycat',
  templateUrl: './editgallerycat.component.html',
  styleUrls: ['./editgallerycat.component.css']
})
export class EditgallerycatComponent implements OnInit {

  public _userForm: FormGroup;
  image: any;
  gallerycat:any;
  constructor(private _formBuilder:FormBuilder, private Jarwis: JarwisService,private dialogRef: MatDialogRef<EditgallerycatComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
  
 
  ngOnInit() {
    
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      image_cate_name:[this.data.user.image_cate_name],
      about:[this.data.user.about],
  
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close(this._userForm.value)

    // this.ngOnInit()
  }
 

}
