import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TemplateDataService, TemplateModel } from '../services/template.data.service';


@Component({
    selector: 'select-template',
    styleUrls: ['./select.component.css'],
    templateUrl: './select.component.html'
})
export class selectComponent implements OnInit {
    models: TemplateModel[];
    @Output() select = new EventEmitter();
    constructor(private service: TemplateDataService) { }

    ngOnInit(): void {
        this.service.getTemplates().subscribe((res: TemplateModel[]) => {
            this.models = res;
        });
    }
}
