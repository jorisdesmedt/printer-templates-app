import { Action } from '@ngrx/store';
import { Printer } from '../../models/printer.model';

export const LOAD_PRINTERS = '[Printing] Load Printers';
export const LOAD_PRINTERS_SUCCESS = '[Printing] Load Printers Success';
export const LOAD_PRINTERS_FAIL = '[Printing] Load Printers Fail';

export class LoadPrinters implements Action {
  readonly type = LOAD_PRINTERS;
}

export class LoadPrintersSuccess implements Action {
  readonly type = LOAD_PRINTERS_SUCCESS;
  constructor(public payload: Printer[]) {}
}

export class LoadPrintersFail implements Action {
  readonly type = LOAD_PRINTERS_FAIL;
  constructor(public payload: any) {}
}

export type PrinterActions = LoadPrinters | LoadPrintersSuccess | LoadPrintersFail;
