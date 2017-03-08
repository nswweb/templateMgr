import { Component, OnInit } from '@angular/core';
import { TemplateDataService, TemplateModel } from '../services/template.data.service';
import { Observable } from 'rxjs/Observable'

const PC_VIEW_CLASS = 'pc-view';
const PHONE_VIEW_CLASS = 'phone-view';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  previewStyle: string = PC_VIEW_CLASS;  
  models: Observable<TemplateModel[]>;
  html:string = '<div>hello template</div>';
  model = {
    id: '',
    html: '<div>hello template</div>'
  };

  constructor(private service: TemplateDataService) { }

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules (){
    this.models = this.service.getTemplates();
  }

  valueChanged(value: string) {
    //this.model.code = value||'';
    //this.html = value;
    this.model.html = value;
  }
  selectTemplate() {

  }
  uploadTemplate() {

  }
  saveModify() {

  }
  showPcPreview() {
    this.previewStyle = PC_VIEW_CLASS;
  }

  showPhonePreview() {
    this.previewStyle = PHONE_VIEW_CLASS;
  }
  formatCode() {

  }
}
