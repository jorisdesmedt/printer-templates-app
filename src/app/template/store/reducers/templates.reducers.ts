import { Printer } from '../../models/printer.model';

import * as fromFeature from '../actions/template.actions';
import { Template } from '../../models/template.model';

export interface TemplateState {
  entities: {[id: number]: Template};
  loading: boolean;
  loaded: boolean;
}

export const initialState: TemplateState = {
  entities: {},
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: fromFeature.TemplateActions): TemplateState {
  switch (action.type) {
    case fromFeature.LOAD_TEMPLATES: {
      return {
        ...state,
        loading: true
      };
    }
    case fromFeature.LOAD_TEMPLATES_SUCCESS: {
      const templates = action.payload;
      const entities = templates.reduce((e: { [id: number]: Template}, template: Template) =>
        ({...e, [template.id]: template}), {...state.entities});
      return {
        ...state,
        entities,
        loading: false,
        loaded: true
      };
    }
    case fromFeature.LOAD_TEMPLATES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromFeature.CREATE_TEMPLATE_SUCCESS: {
      const template = action.payload;
      const entities = {
        ...state.entities,
        [template.id]: template
      };
      return {
        ...state,
        ...entities
      };
    }
  }
  return state;
}

export const getTemplateEntities = (state: TemplateState) => state.entities;
export const getTemplateLoading = (state: TemplateState) => state.loading;
export const getTemplateLoaded = (state: TemplateState) => state.loaded;
