import { Printer } from '../../models/printer.model';

import * as fromFeature from '../actions/printers.actions';

export interface PrinterState {
  entities: {[id: number]: Printer};
  loading: boolean;
  loaded: boolean;
}

export const initialState: PrinterState = {
  entities: {},
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: fromFeature.PrinterActions): PrinterState {
  switch (action.type) {
    case fromFeature.LOAD_PRINTERS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromFeature.LOAD_PRINTERS_SUCCESS: {
      const templates = action.payload;
      const entities = templates.reduce((e: { [id: number]: Printer}, printer: Printer) =>
        ({...e, [printer.id]: printer}), {...state.entities});
      return {
        ...state,
        entities,
        loading: false,
        loaded: true
      };
    }
    case fromFeature.LOAD_PRINTERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getPrinterEntities = (state: PrinterState) => state.entities;
export const getPrinterLoading = (state: PrinterState) => state.loading;
export const getPrinterLoaded = (state: PrinterState) => state.loaded;
