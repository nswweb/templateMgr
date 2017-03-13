import { Component, OnInit } from '@angular/core';
import { TemplateDataService, TemplateModel } from '../services/template.data.service';
import { Observable } from 'rxjs/Observable'
let beautify = require('js-beautify').html;


const PC_VIEW_CLASS = 'pc-view';
const PHONE_VIEW_CLASS = 'phone-view';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  previewStyle: string = PC_VIEW_CLASS;
  index: number = 0;
  displaySelectPanel: boolean = false;
  html: string = '<div>hello template</div>';
  model: TemplateModel = new TemplateModel();
  models: TemplateModel[];
  menuTitle:String = '模板';

  constructor(private service: TemplateDataService) { }

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules() {
    this.service.getTemplates().subscribe((res: TemplateModel[]) => {
      this.models = res;
      this.model = this.models[this.index];
      this.formatCode();
    });
  }

  valueChanged(value: string) {
    //this.model.code = value||'';
    //this.html = value;
    this.model.htmlContent = value;
  }
  showSelectTemplate() {
    this.displaySelectPanel = !this.displaySelectPanel;
  }
  selectTemplate(model: TemplateModel) {
    this.model = model;
    this.formatCode();
  }

  selectFirst() {
    this.index = 0;
    this.model = this.models[this.index];
    this.formatCode();
  }

  selectPrevious() {
    this.index = this.index > 0 ? this.index - 1 : 0;
    this.model = this.models[this.index];
    this.formatCode();
  }

  selectNext() {
    this.index = this.index < this.models.length - 1 ? this.index + 1 : this.models.length - 1;
    this.model = this.models[this.index];
    this.formatCode();
  }

  selectLast() {
    this.index = this.models.length - 1;
    this.model = this.models[this.index];
    this.formatCode();
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
    this.model.htmlContent = beautify(this.model.htmlContent, { indent_size: 4,"indent_char": " ", });
  }
}
