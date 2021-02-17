import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageService, NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
import { WallMessageComponent } from './wallMessage/wallMessage.component';
import { MessageComponent } from './wallMessage/message/message.component';
import { ComposeMessageComponent } from './composeMessage/composeMessage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent,
      WallMessageComponent,
      MessageComponent,
      ComposeMessageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
