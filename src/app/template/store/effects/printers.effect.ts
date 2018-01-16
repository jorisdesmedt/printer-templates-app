import { Injectable } from '@angular/core';

import * as fromServices from '../../service';
import * as fromActions from '../actions/printers.actions';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PrintersEffect {

  constructor(private printerService: fromServices.PrinterService, private actions$: Actions) {}

  @Effect()
  printers$ = this.actions$.ofType(fromActions.LOAD_PRINTERS).pipe(
    switchMap(() => this.printerService.getPrinters()),
    map(printers => new fromActions.LoadPrintersSuccess(printers)),
    catchError(error => of(new fromActions.LoadPrintersFail(error)))
  );
}
