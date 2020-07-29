import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.css']
})
export class EditnewsComponent implements OnInit {

  public _userForm: FormGroup;
  image: any;
  newcat:any;
  constructor(private _formBuilder:FormBuilder, private Jarwis: JarwisService,private dialogRef: MatDialogRef<EditnewsComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
  
 
  ngOnInit() {
    this.Jarwis.getnewcat().subscribe(
      data=>{
      this.newcat = data; 

      
      }
      
    )
   
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      blog_name:[this.data.user.blog_name],
      blog_title:[this.data.user.blog_title],
      content1:[this.data.user.content1],
      content2:[this.data.user.content2],
      content3:[this.data.user.content3],
      link:[this.data.user.link],
      category_id:[this.data.user.category_id],
    });
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
  onSubmit(){
    // console.log(this._userForm.value)
    this.dialogRef.close({formdata:this._userForm.value,image:this.image})

    // this.ngOnInit()
  }
 

}
