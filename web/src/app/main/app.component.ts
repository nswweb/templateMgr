import { Component } from '@angular/core';

const PC_VIEW_CLASS = 'pc-view';
const PHONE_VIEW_CLASS = 'phone-view';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    previewStyle:string = PC_VIEW_CLASS;
    html:string = "<div>hello template</div>";
    valueChanged(value:string){
      this.html = value;
    }
    selectTemplate(){
    
    }
    uploadTemplate(){

    }
    saveModify(){

    }

    showPcPreview(){
      this.previewStyle = PC_VIEW_CLASS;
    }

    showPhonePreview(){
      this.previewStyle = PHONE_VIEW_CLASS;
    }
}
