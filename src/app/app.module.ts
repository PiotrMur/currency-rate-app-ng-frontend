import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { ValueRequestListComponent } from './valuerequest-list/value-request-list.component';
import { ValuerequestFormComponent } from './valuerequest-form/valuerequest-form.component';
import {RequestService} from "./request-service.service";
import { DeleterequestFormComponent } from './deleterequest-form/deleterequest-form.component';
import { FetchrequestFormComponent } from './fetchrequest-form/fetchrequest-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueRequestListComponent,
    ValuerequestFormComponent,
    DeleterequestFormComponent,
    FetchrequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
