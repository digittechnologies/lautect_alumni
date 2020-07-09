import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

  public form = {
    asso_name: null,
    // about: null,
  };
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }
asso:any;
  onSubmit() {
    this.Jarwis.addasso(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.form.asso_name="";
    this.ngOnInit()
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
    this.Jarwis.getasso().subscribe(
      data=>{
      this.asso = data; 
    //  console.log(this.asso)

      
      }
    )
  }

}
