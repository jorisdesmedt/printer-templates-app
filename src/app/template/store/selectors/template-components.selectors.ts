import * as fromFeature from '../reducers';
import { createSelector } from '@ngrx/store';

import { TemplateComponentItem } from '../../components/template-components/index';

export const getTemplateComponentsState = createSelector(fromFeature.getPrintingState, state => state.templateComponents);
export const getTemplateComponentsEntitites = createSelector(getTemplateComponentsState, state => state.entities);
export const getTemplateComponentsLoaded = createSelector(getTemplateComponentsState, state => state.loaded);
export const getTemplateComponentsLoading = createSelector(getTemplateComponentsState, state => state.loading);
export const getTemplateComponentsEditingIndex = createSelector(getTemplateComponentsState, state => state.editing);
export const getAllTemplateComponents = createSelector(getTemplateComponentsEntitites, entities =>
  Object
  .keys(entities)
  .map(id => entities[id])
);
export const getSelectedTemplateComponents = createSelector(getTemplateComponentsState, state => state.selectedTemplateComponents);
export const getVisualisedTemplate = createSelector(
  getTemplateComponentsEntitites,
  getSelectedTemplateComponents,
  (templateComponentsEntities, selectedTemplateComponents) => {
    return selectedTemplateComponents.map(selectedComponent => ({
      ...templateComponentsEntities[selectedComponent.id],
      data: { ...selectedComponent.data }
    }));
  }
);
export const getSelectedTemplateComponentForEditing = createSelector(
  getVisualisedTemplate,
  getTemplateComponentsEditingIndex,
  (templateComponentItems: TemplateComponentItem[], selectedIndex: number) => templateComponentItems[selectedIndex]
);
