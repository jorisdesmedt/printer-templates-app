import * as fromFeature from '../reducers';
import { createSelector } from '@ngrx/store';

export const getPrintersState = createSelector(fromFeature.getPrintingState, state => state.printers);
export const getPrinterEntitites = createSelector(getPrintersState, state => state.entities);
export const getPrintersLoaded = createSelector(getPrintersState, state => state.loaded);
export const getPrintersLoading = createSelector(getPrintersState, state => state.loading);
export const getAllPrinters = createSelector(getPrinterEntitites, entities =>
  Object
  .keys(entities)
  .map(id => entities[id])
);
