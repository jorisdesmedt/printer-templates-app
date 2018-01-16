import { Injectable } from '@angular/core';

import * as fromServices from '../../service';
import * as fromActions from '../actions/template.actions';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';

@Injectable()
export class TemplatesEffect {

  constructor(private templateService: fromServices.TemplateService, private actions$: Actions, private router: Router) {}

  @Effect()
  printers$ = this.actions$.ofType(fromActions.LOAD_TEMPLATES).pipe(
    switchMap(() => this.templateService.getTemplates()),
    map(templates => new fromActions.LoadTemplatesSuccess(templates)),
    catchError(error => of(new fromActions.LoadTemplatesFail(error)))
  );

  @Effect()
  createPrinter$ = this.actions$.ofType(fromActions.CREATE_TEMPLATE)
    .pipe(
      map((action: fromActions.CreateTemplate) => action.payload),
      switchMap(template => this.templateService.createTemplate(template)),
      map(template => new fromActions.CreateTemplateSuccess(template)),
      catchError(error => of(new fromActions.CreateTemplateFail(error)))
    );

  @Effect({dispatch: false})
  createTemplateSuccess$ = this.actions$.ofType(fromActions.CREATE_TEMPLATE_SUCCESS).pipe(
    map(() => this.router.navigate(['..']))
  );
}
