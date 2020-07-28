import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-editpeople',
  templateUrl: './editpeople.component.html',
  styleUrls: ['./editpeople.component.css']
})
export class EditpeopleComponent implements OnInit {

  public _userForm: FormGroup;
  image: any;
  cat:any;
  constructor(private _formBuilder:FormBuilder, private Jarwis: JarwisService,private dialogRef: MatDialogRef<EditpeopleComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
  
   public form = {
    category_id: null,
    about: null,
    name:null,
    position:null,
    link_id:null,
  };
  ngOnInit() {
    this.Jarwis.getcat().subscribe(
      data=>{
      this.cat = data; 
    //  console.log(this.usercat)

      
      }
    )
    
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      name:[this.data.user.name],
     about:[this.data.user.about],
      position:[this.data.user.position],
      link_id:[this.data.user.link_id],
      
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
