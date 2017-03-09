import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class TemplateModel {
    _id: string;
    htmlContent: string;
    title: string;
    constructor() {
        this.htmlContent = '';
    }

    static toModel(item: any): TemplateModel {
        var model = new TemplateModel();
        model._id = item._id;
        model.htmlContent = item.htmlContent;
        model.title = item.title;
        return model;
    }
}

@Injectable()
export class TemplateDataService {
    constructor(
        private http: Http
    ) {

    }

    private extractData(res: Response) {
        let body = res.json();
        var result = body.map((item: any) => TemplateModel.toModel(item));
        return result || {};
    }
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getTemplates(): Observable<TemplateModel[]> {
        return this.http.get('api/editTemplate/editTpls')
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateTemplate(model: TemplateModel): Promise<TemplateModel> {
        return this.http
            .put('/api/template/update', JSON.stringify(model))
            .toPromise()
            .then(() => model)
            .catch(this.handleError);
    }
}