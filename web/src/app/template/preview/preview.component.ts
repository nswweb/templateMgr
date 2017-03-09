import {Component, Input} from '@angular/core';

@Component({
    selector:'preview',
    styleUrls:['./preview.component.css'],
    templateUrl:'./preview.component.html'
})
export class previewComponent{
    _template:string = '';
    @Input()
    set template(value){        
        this._template = value;
        var iframe:any = document.querySelector('[name=previewer]');
        if(iframe){
            iframe.contentWindow.document.querySelector('body').innerHTML = `<div>${this._template}</div>`;//  this._template;
        }
    }    
    get template():string{
        return this._template;
    }


    constructor(){

    }
}