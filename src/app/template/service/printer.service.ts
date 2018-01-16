import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Printer } from '../models/printer.model';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PrinterService {

  constructor(private http: HttpClient) { }

  getPrinters(): Observable<Printer[]> {
    return this.http
      .get<Printer[]>('api/printers')
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
