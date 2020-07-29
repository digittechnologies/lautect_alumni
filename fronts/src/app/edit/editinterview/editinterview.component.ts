import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editinterview',
  templateUrl: './editinterview.component.html',
  styleUrls: ['./editinterview.component.css']
})
export class EditinterviewComponent implements OnInit {

  public _userForm: FormGroup;
  image: any;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EditinterviewComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
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
    inter_name:[this.data.user.inter_name],
    inter_position:[this.data.user.inter_position],
  link:[this.data.user.link],
  content:[this.data.user.content],
 
    });
  }
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close({formdata:this._userForm.value,image:this.image})

    // this.ngOnInit()
  }

}
