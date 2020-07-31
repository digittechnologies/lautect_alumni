import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editaboutus',
  templateUrl: './editaboutus.component.html',
  styleUrls: ['./editaboutus.component.css']
})
export class EditaboutusComponent implements OnInit {

  public _userForm: FormGroup;
  image: any;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EditaboutusComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
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
  
  ngOnInit() {
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
    
    title:[this.data.user.title],
   content:[this.data.user.content],
    year :[this.data.user.year],
    
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close({formdata:this._userForm.value,image:this.image})
    // this.ngOnInit()
  }
}
