import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Template } from '../models/template.model';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TemplateService {

  constructor(private http: HttpClient) { }

  getTemplates(): Observable<Template[]> {
    return this.http
      .get<Template[]>('api/templates')
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  createTemplate(template: Template): Observable<Template> {
    return this.http
      .post<Template>(`/api/templates`, template)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
