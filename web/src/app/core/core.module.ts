import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import {SemanticModule} from './semanticui/module';
import {AceComponent} from './ace-editor/ace.component';



@NgModule({
    imports: [
        FormsModule,
        SemanticModule
    ],
    declarations: [AceComponent],
    exports: [AceComponent]
})
export class CoreModule { }