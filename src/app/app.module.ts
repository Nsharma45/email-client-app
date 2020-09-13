import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MailDetailsComponent } from './components/mail-details/mail-details.component';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { UnreadCountComponent } from './components/unread-count/unread-count.component';
import { MailsComponent } from './components/mails/mails.component';
import { MailFoldersComponent } from './components/mail-folders/mail-folders.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    MailFoldersComponent,
    MailDetailsComponent,
    UnreadCountComponent, MailsComponent,
    MailViewComponent,
    PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
