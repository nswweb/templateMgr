import {Component,ElementRef, Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:'edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent{
    private aceOption: any;
    private mode: string = "html";
    private value:string ='';
    @Output() valueChanged = new EventEmitter();
    
    @Input() 
    set editValue(value:string){
        this.value = value;
        this.valueChanged.emit(this.value);
    }
    get editValue(){
        return this.value;
    }

    constructor(){

    }

    ngOnInit() {
        this.aceOption = {
            readonly: false,
            theme: 'twilight',
            height:700,
            onLoaded: (editor:any) => {
                editor.$blockScrolling = Infinity
                editor.setOptions({
                minLines: 15,
                maxLines: 250                
                })
            },
            onChange: (e:any) => {

            }
        }
    }
}