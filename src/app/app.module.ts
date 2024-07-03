import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserRequest } from './models/cretate-user-request';
import { CreateGroupComponent } from './home-page/create-group/create-group/create-group.component';
import { HighlightDirective } from './directives/highlight.directive';
import { GroupDetailsComponent } from './group-details/group-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    GroupDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CreateGroupComponent
  ],
  providers: [CreateUserRequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
