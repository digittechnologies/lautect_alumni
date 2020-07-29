import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JarwisService } from '../../services/jarwis.service';
@Component({
  selector: 'app-editopportunities',
  templateUrl: './editopportunities.component.html',
  styleUrls: ['./editopportunities.component.css']
})
export class EditopportunitiesComponent implements OnInit {
 
  public _userForm: FormGroup;
  image: any;
  career:any;
  constructor(private _formBuilder:FormBuilder, private Jarwis: JarwisService,private dialogRef: MatDialogRef<EditopportunitiesComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }
   
  
 
  ngOnInit() {
    this.Jarwis.getcareercat().subscribe(
      data=>{
      this.career = data; 
  
      
      }
      
    )
    
   
    // console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      car_name:[this.data.user.car_name],
      title:[this.data.user.title],
      content:[this.data.user.content],
      location:[this.data.user.location],
      address:[this.data.user.address],
      information:[this.data.user.information],
      car_cat_id:[this.data.user.car_cat_id],
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
