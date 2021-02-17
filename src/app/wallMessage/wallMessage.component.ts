import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { GlobalService } from '../global.service';
import { Message } from '../message';

@Component({
  selector: 'app-wallMessage',
  templateUrl: './wallMessage.component.html',
  styleUrls: ['./wallMessage.component.scss']
})
export class WallMessageComponent implements OnInit {

  constructor(private globalService: GlobalService, private storage: LocalStorageService){
  }

  allMessage:Message[] = [];

  ngOnInit(){
    this.getAllMessage();
  }

  getAllMessage(){
    this.allMessage = this.globalService.getAllMessage();
  }

  getAllMessageAPI() {
    this.globalService.getAllMessageAPI()
      .subscribe(response => {
        this.allMessage = response;
      }, error => {
      
      })
  }

}
