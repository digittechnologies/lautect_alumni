import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
auth:any;
  authdata: any;
  count: any;
  constructor(private Jarwis: JarwisService) { }

  ngOnInit() {
    this.Jarwis.getauth().subscribe(
      data=>{
      this.authdata = data; 
      this.auth=this.authdata.auth
    this.count=this.authdata.authcount
  //  console.log(this.user)
    //  console.log(this.auth)

      
      }
    )

  }

}
