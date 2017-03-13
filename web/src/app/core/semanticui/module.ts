import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import {MenuComponent} from './menu/menu.component';

import '../../../../semantic-ui/semantic.js';
import '../../../../semantic-ui/semantic.css';

@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [MenuComponent],
    exports: [MenuComponent]
})
export class SemanticModule { }