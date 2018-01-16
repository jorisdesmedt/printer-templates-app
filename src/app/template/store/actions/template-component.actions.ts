import { Action } from '@ngrx/store';
import { TemplateComponentCollection, TemplateComponentItem } from '../../components/template-components/index';

export const LOAD_TEMPLATE_COMPONENTS = '[Printing] Load Template Components';
export const LOAD_TEMPLATE_COMPONENTS_SUCCESS = '[Printing] Load Template Components Success';
export const LOAD_TEMPLATE_COMPONENTS_FAIL = '[Printing] Load Template Components Fail';
export const ADD_SELECTED_TEMPLATE_COMPONENT = '[Printing] Add a template component to selection';
export const REMOVE_SELECTED_TEMPLATE_COMPONENT = '[Printing] Remove a template component to selection';
export const MOVE_SELECTED_TEMPLATE_COMPONENT_UP = '[Printing] Move a template component to selection up';
export const MOVE_SELECTED_TEMPLATE_COMPONENT_DOWN = '[Printing] Move a template component to selection down';
export const SELECT_TEMPLATE_COMPONENT_FOR_EDITING = '[Printing] Select a template component for editing';
export const UPDATE_TEMPLATE_COMPONENT_DATA = '[Printing] Update template component data';


export class LoadTemplateComponents implements Action {
  readonly type = LOAD_TEMPLATE_COMPONENTS;
}

export class LoadTemplateComponentsSuccess implements Action {
  readonly type = LOAD_TEMPLATE_COMPONENTS_SUCCESS;
  constructor(public payload: TemplateComponentCollection) {}
}

export class LoadTemplateComponentsFail implements Action {
  readonly type = LOAD_TEMPLATE_COMPONENTS_FAIL;
  constructor(public payload: any) {}
}

export class AddSelectedTemplateComponent implements Action {
  readonly type = ADD_SELECTED_TEMPLATE_COMPONENT;
  constructor(public payload: TemplateComponentItem) {}
}

export class RemoveSelectedTemplateComponent implements Action {
  readonly type = REMOVE_SELECTED_TEMPLATE_COMPONENT;
  constructor(public payload: {templateComponentItem: TemplateComponentItem, index: number}) {}
}

export class MoveSelectedTemplateComponentUp implements Action {
  readonly type = MOVE_SELECTED_TEMPLATE_COMPONENT_UP;
  constructor(public payload: {templateComponentItem: TemplateComponentItem, index: number}) {}
}

export class MoveSelectedTemplateComponentDown implements Action {
  readonly type = MOVE_SELECTED_TEMPLATE_COMPONENT_DOWN;
  constructor(public payload: {templateComponentItem: TemplateComponentItem, index: number}) {}
}

export class SelectTemplateComponentForEditing implements Action {
  readonly type = SELECT_TEMPLATE_COMPONENT_FOR_EDITING;
  constructor(public payload: number) {}
}

export class UpdateTemplateComponentData implements Action {
  readonly type = UPDATE_TEMPLATE_COMPONENT_DATA;
  constructor(public payload: {data: any, index: number}) {}
}

export type TemplateComponentsActions =
  | LoadTemplateComponents
  | LoadTemplateComponentsSuccess
  | LoadTemplateComponentsFail
  | AddSelectedTemplateComponent
  | RemoveSelectedTemplateComponent
  | MoveSelectedTemplateComponentUp
  | MoveSelectedTemplateComponentDown
  | SelectTemplateComponentForEditing
  | UpdateTemplateComponentData;
