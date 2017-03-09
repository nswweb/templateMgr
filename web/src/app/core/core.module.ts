import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

 import {AceComponent} from './ace-editor/ace.component';


@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [AceComponent],
    exports: [AceComponent]
})
export class CoreModule { }