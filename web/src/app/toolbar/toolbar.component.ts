import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'toolbar',
    templateUrl:'./toolbar.component.html',
    styleUrls:['./toolbar.component.css']
})
export class ToolbarComponent{
    @Output() select = new EventEmitter();
    @Output() save = new EventEmitter();
    @Output() upload = new EventEmitter();
    @Output() usePhone = new EventEmitter();
    @Output() usePc = new EventEmitter();

    constructor(){
    }
}