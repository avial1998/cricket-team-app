import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
username!:String;
user:any;
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
  }
  public findByUsername(){
    let response=this.service.getUserByUsername(this.username);
    response.subscribe(data=>this.user=data);
  }

}
