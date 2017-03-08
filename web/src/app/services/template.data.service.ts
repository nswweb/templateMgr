import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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
        console.log('get templatews');

        // this.http.get('api/template/loadUsers/aa').toPromise()
        // .then((res)=>{
        //     let body = res.json();
        //     alert(body.data);
        // });

        // return this.http.get('api/template/loadUsers/aa')
        //     .map(this.extractData)
        //     .catch(this.handleError);

        return this.http.get('api/template/loadUsers/aa')
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