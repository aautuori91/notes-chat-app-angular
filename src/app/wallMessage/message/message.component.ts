import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/message';
import { Utils } from 'src/app/utils';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message!: Message;
  readmore:string = "Read More";
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    const ps = document.querySelectorAll('p');
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
      }
    });

    ps.forEach(p => {
      observer.observe(p);
    });
  }

  getCurrentUserID() {
    return Utils.getCurrentUser().id;
  }

  getUserByID(id: number) {
    let user = Utils.getUserByID(id);
    return user;
  }

}
