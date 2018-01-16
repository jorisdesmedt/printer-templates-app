import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTemplateReducers from './templates.reducers';
import * as fromPrinterReducers from './printers.reducers';
import * as fromTemplateComponentsReducers from './template-components.reducer';

export interface PrintingState {
  printers: fromPrinterReducers.PrinterState;
  templates: fromTemplateReducers.TemplateState;
  templateComponents: fromTemplateComponentsReducers.TemplateComponentsState;
}

export const reducers: ActionReducerMap<PrintingState> = {
  printers: fromPrinterReducers.reducer,
  templates: fromTemplateReducers.reducer,
  templateComponents: fromTemplateComponentsReducers.reducer
};

export const getPrintingState = createFeatureSelector<PrintingState>('printing');
