import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JarwisService } from '../../services/jarwis.service';
@Component({
  selector: 'app-editgallery',
  templateUrl: './editgallery.component.html',
  styleUrls: ['./editgallery.component.css']
})
export class EditgalleryComponent implements OnInit {

  public _userForm: FormGroup;
  image: any;
  gallerycat:any;
  constructor(private _formBuilder:FormBuilder, private Jarwis: JarwisService,private dialogRef: MatDialogRef<EditgalleryComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
  
 
  ngOnInit() {
    this.Jarwis.getgallerycat().subscribe(
      data=>{
      this.gallerycat = data; 

      
      }
      
    )
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      image_name:[this.data.user.image_name],
      image_cat_id:[this.data.user.image_cat_id],
  
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close(this._userForm.value)

    // this.ngOnInit()
  }
 

}
