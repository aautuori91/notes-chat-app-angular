import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from '../global.service';
import { Message } from '../message';
import { Utils } from '../utils';

@Component({
  selector: 'app-composeMessage',
  templateUrl: './composeMessage.component.html',
  styleUrls: ['./composeMessage.component.css']
})
export class ComposeMessageComponent implements OnInit {
  newMessage!: Message;
  textMessage!:string;
  today = new Date();
  placeholdersubmit: string = "Enter note about the process";
  publishButton: string = "Publish";
  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }

  addMessage(){
    this.newMessage = new Message(Math.floor(Math.random() * 1000) + 1  , Utils.getCurrentUser().id, this.today.toString(), this.textMessage);
    // Simulo chiamata ad API...
    let response = this.globalService.addMessage(this.newMessage);
    if(response){
      this.textMessage = '';
    }
  }

}
