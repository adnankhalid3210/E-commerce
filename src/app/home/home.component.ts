import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
nodeResponse;
  constructor(private myService: DataService ) { }

  ngOnInit() {
this.myService.getData()
.subscribe(result=> {
this.nodeResponse=result;
})
  }

}
