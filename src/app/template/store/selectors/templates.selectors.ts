import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';

export const getTemplatesState = createSelector(fromFeature.getPrintingState, state => state.templates);
export const getTemplateEntitites = createSelector(getTemplatesState, state => state.entities);
export const getTemplatesLoaded = createSelector(getTemplatesState, state => state.loaded);
export const getTemplatesLoading = createSelector(getTemplatesState, state => state.loading);
export const getAllTemplates = createSelector(getTemplateEntitites, entities =>
  Object
  .keys(entities)
  .map(id => entities[id])
);
