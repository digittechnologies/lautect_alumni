import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  userdata: any;
  user: any;
  count: any;

  constructor(private Jarwis: JarwisService,) { }

  ngOnInit() {
    this.Jarwis.getadmin().subscribe(
      data=>{
      this.userdata = data; 
      this.user=this.userdata.user
      this.count=this.userdata.usercount
    //  console.log(this.user)

      
      }
    )
  }

}
