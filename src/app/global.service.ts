import { Injectable } from '@angular/core';
import { Message } from './message';
import { Utils } from './utils';
import { Constants } from './constants';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

constructor(private storage: LocalStorageService,
  private http: HttpClient) { }

// JSON Array di Oggetti di tipo Message
allMessageFromService: Message[] = [{
  id: 10,
  idUser: 11,
  dataMessage: '10/01/2021 10:10:10',
  textMessage: 'Ciao questo è un test'
}, {
  id: 11,
  idUser: 11,
  dataMessage: '10/01/2021 10:10:10',
  textMessage: 'Ciao questo è un test 2'
}, {
  id: 12,
  idUser: 2,
  dataMessage: '10/01/2021 10:10:10',
  textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
  id: 13,
  idUser: 11,
  dataMessage: '10/01/2021 10:10:10',
  textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
  id: 14,
  idUser: 22,
  dataMessage: '10/01/2021 10:10:10',
  textMessage: 'Ciao questo è un test 3'
}
];

/* Metodo usato solamente in questo caso, che non abbiamo BE e DB */
getAllMessage(): Message[] {
  let allMessages = this.storage.retrieve("allMessages");
  if(allMessages){
    return allMessages;
  } else {
    this.storage.store("allMessages", this.allMessageFromService);
    return this.allMessageFromService;
  }
}

/* ESEMPIO: Caso in cui c'è da fare una reale chiamata all'esterno al BE ... 
ma in questo caso abbiamo tutto storato in locale ... */
getAllMessageAPI(): Observable<Message[]> {
  const url = Utils.getCompleteHost() + '/' + Constants.apiGetAllMessage;
  return this.http.get<Message[]>(url);
}

addMessage(newMex:Message){
  let allMessages = this.storage.retrieve("allMessages");
  allMessages.push(newMex);
  this.storage.store("allMessages", allMessages);
  return true;
}

}
