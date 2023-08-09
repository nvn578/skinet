import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
  baseUrl = environment.apiUrl;
  validationErrors:string[] =[]
  constructor(private http : HttpClient){
    //this.get404();
  }

  get404Error(){
    return this.http.get(this.baseUrl + 'products/42');
  }

  get500Error(){
    return this.http.get(this.baseUrl + 'buggy/servererror');
  }
  get400Error(){
    return this.http.get(this.baseUrl + 'buggy/badrequest');
  }
  get400ValidationError(){
    return this.http.get(this.baseUrl + 'products/fortytwo');
  }

  get404(){
    this.get404Error().subscribe({
      next : response => {console.log(response),
      console.log("hello responseeeeee")
      },
        error: error => {console.log(error),
          console.log("errorrr")}         
      })
  }

  get500(){
    this.get500Error().subscribe({
      next : response => console.log(response),
        error: error => console.log(error)      
      })
  }

  get400(){
    this.get400Error().subscribe({
      next : response => console.log(response),
      error: error => console.log(error)      
    })
  }

  get400Validation(){
    this.get400ValidationError().subscribe({
      next : response => console.log(response),
        error: error => {console.log(error);
          this.validationErrors = error.errors;
          }    
      })
  }
}