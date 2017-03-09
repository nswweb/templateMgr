import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './template/main/app.component';

import {FormsModule} from '@angular/forms';
import {LAceEditorModule } from 'angular2-ace';

import {EditComponent} from './template/edit/edit.component';
import {previewComponent} from './template/preview/preview.component';
import {selectComponent} from './template/select/select.component';
import {ToolbarComponent} from './template/toolbar/toolbar.component';
import {TemplateDataService, TemplateModel} from './template/services/template.data.service';



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
    ToolbarComponent,
    selectComponent
  ],
  providers:[TemplateDataService, TemplateModel],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
