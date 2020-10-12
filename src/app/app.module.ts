import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { ActionItemComponent } from './components/action-item/action-item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { FilterToDosComponent } from './components/filter-to-dos/filter-to-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    ActionItemComponent,
    AddItemComponent,
    ItemDetailsComponent,
    FilterToDosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
