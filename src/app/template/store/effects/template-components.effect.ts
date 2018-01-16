import { Injectable } from '@angular/core';

import * as fromActions from '../actions/template-component.actions';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { templateComponents } from '../../components/template-components/index';

@Injectable()
export class TemplateComponentsEffect {

  constructor(private actions$: Actions) {}

  @Effect()
  printers$ = this.actions$.ofType(fromActions.LOAD_TEMPLATE_COMPONENTS).pipe(
    map(() => new fromActions.LoadTemplateComponentsSuccess(templateComponents)),
    catchError(error => of(new fromActions.LoadTemplateComponentsFail(error)))
  );
}
