import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {LAceEditorModule } from 'angular2-ace';

import {EditComponent} from './edit/edit.component';
import {previewComponent} from './preview/preview.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LAceEditorModule
  ],
  declarations: [
    AppComponent,
    EditComponent,
    previewComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
