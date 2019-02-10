import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private myhttp: HttpClient) { }

getData()  {
  return this.myhttp.get('http://localhost:3000')
}
age = 25;
postData(body){
  console.log('Step 2', body);
  return this.myhttp.post('http://localhost:3000/save', body );
}
//getData() {
  //return this.http.get('http://localhost:3000')
//}

}
