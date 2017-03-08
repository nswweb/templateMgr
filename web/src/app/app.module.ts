import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './main/app.component';

import {FormsModule} from '@angular/forms';
import {LAceEditorModule } from 'angular2-ace';

import {EditComponent} from './edit/edit.component';
import {previewComponent} from './preview/preview.component';

import {ToolbarComponent} from './toolbar/toolbar.component';
import {TemplateDataService} from './services/template.data.service';

import '../../public/css/styles.css';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LAceEditorModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    EditComponent,
    previewComponent,
    ToolbarComponent
  ],
  providers:[TemplateDataService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
