import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface TemplateModel {
    id: string,
    html: string
}

@Injectable()
export class TemplateDataService {
    constructor(
        private http: Http
    ) {

    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body: any = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getTemplates(): Observable<TemplateModel[]> {
        console.log('get templatews');

        this.http.get('api/editTpls').toPromise()
        .then((res)=>{
            let body = res.json();
            alert(body.data);
        });

        return this.http.get('api/editTpls', {
            method: 'get'
        })
            .map((res) => {
                return res.json().data || {};
            })
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