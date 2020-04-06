import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoComponent } from "./todo.component";
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent, 
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent, TodoComponent]
})
export class AppModule { }
