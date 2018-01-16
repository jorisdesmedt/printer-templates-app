import { TemplateComponentCollection, templateComponents } from '../../components/template-components/index';

import * as fromActions from '../actions/template-component.actions';

export interface TemplateComponentsState {
  entities: TemplateComponentCollection;
  loaded: boolean;
  loading: boolean;
  selectedTemplateComponents: {id: string, data: any}[];
  editing: number;
}

export const initialState: TemplateComponentsState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedTemplateComponents: [],
  editing: -1
};

export function reducer(state = initialState, action: fromActions.TemplateComponentsActions): TemplateComponentsState {
  switch (action.type) {
    case fromActions.LOAD_TEMPLATE_COMPONENTS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromActions.LOAD_TEMPLATE_COMPONENTS_SUCCESS: {
      const entities = {...action.payload};
      return {
        ...state,
        entities,
        loading: false,
        loaded: true
      };
    }
    case fromActions.LOAD_TEMPLATE_COMPONENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromActions.ADD_SELECTED_TEMPLATE_COMPONENT: {
      const {id, data} = action.payload;
      const selectedTemplateComponents = [...state.selectedTemplateComponents, { id, data}];
      return {
        ...state,
        selectedTemplateComponents
      };
    }
    case fromActions.REMOVE_SELECTED_TEMPLATE_COMPONENT: {
      const { templateComponentItem, index } = action.payload;
      const selectedTemplateComponents = state.selectedTemplateComponents.filter((item, i) =>
        item.id !== templateComponentItem.id || i !== index
      );
      return {
        ...state,
        selectedTemplateComponents
      };
    }
    case fromActions.MOVE_SELECTED_TEMPLATE_COMPONENT_UP: {
      const { templateComponentItem, index } = action.payload;
      if (index <= 0) {
        break;
      }
      const first = state.selectedTemplateComponents.filter((item, i) => i < index - 1);
      const last = state.selectedTemplateComponents.filter((item, i) => (i >= index - 1 && i !== index));
      const selectedTemplateComponents = [...first, templateComponentItem, ...last];
      return {
        ...state,
        selectedTemplateComponents
      };
    }
    case fromActions.MOVE_SELECTED_TEMPLATE_COMPONENT_DOWN: {
      const { templateComponentItem, index } = action.payload;
      if (index >= state.selectedTemplateComponents.length) {
        break;
      }
      const first = state.selectedTemplateComponents.filter((item, i) => i <= index + 1 && i !== index);
      const last = state.selectedTemplateComponents.filter((item, i) => i > index + 1);
      const selectedTemplateComponents = [...first, templateComponentItem, ...last];
      return {
        ...state,
        selectedTemplateComponents
      };
    }
    case fromActions.SELECT_TEMPLATE_COMPONENT_FOR_EDITING: {
      const editing = action.payload;
      return {
        ...state,
        editing
      };
    }
    case fromActions.UPDATE_TEMPLATE_COMPONENT_DATA: {
      const { index, data } = action.payload;
      const selectedTemplateComponents = state.selectedTemplateComponents.map((item, i) => {
        if (index === i) {
          return {
            ...item,
            data
          };
        } else {
          return { ...item};
        }
      });
      return {
        ...state,
        selectedTemplateComponents
      };
    }
  }
  return state;
}

export const getTemplateComponentsEntities = (state: TemplateComponentsState) => state.entities;
export const getTemplateComponentsLoaded = (state: TemplateComponentsState) => state.loaded;
export const getTemplateComponentsLoading = (state: TemplateComponentsState) => state.loading;
export const getTemplateComponentsEditingIndex = (state: TemplateComponentsState) => state.editing;

