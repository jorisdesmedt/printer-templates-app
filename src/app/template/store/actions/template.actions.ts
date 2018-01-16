import { Action } from '@ngrx/store';
import { Template } from '../../models/template.model';

export const LOAD_TEMPLATES = '[Printing] Load Templates';
export const LOAD_TEMPLATES_SUCCESS = '[Printing] Load Templates Success';
export const LOAD_TEMPLATES_FAIL = '[Printing] Load Templates Fail';
export const CREATE_TEMPLATE = '[Printing] Create Template';
export const CREATE_TEMPLATE_SUCCESS = '[Printing] Create Template Success';
export const CREATE_TEMPLATE_FAIL = '[Printing] Create Template Fail';

export class LoadTemplates implements Action {
  readonly type = LOAD_TEMPLATES;
}

export class LoadTemplatesSuccess implements Action {
  readonly type = LOAD_TEMPLATES_SUCCESS;
  constructor(public payload: Template[]) {}
}

export class LoadTemplatesFail implements Action {
  readonly type = LOAD_TEMPLATES_FAIL;
  constructor(public payload: any) {}
}

export class CreateTemplate implements Action {
  readonly type = CREATE_TEMPLATE;
  constructor(public payload: Template) {}
}

export class CreateTemplateSuccess implements Action {
  readonly type = CREATE_TEMPLATE_SUCCESS;
  constructor(public payload: Template) {}
}

export class CreateTemplateFail implements Action {
  readonly type = CREATE_TEMPLATE_FAIL;
  constructor(public payload: any) {}
}

export type TemplateActions =
  | LoadTemplates
  | LoadTemplatesSuccess
  | LoadTemplatesFail
  | CreateTemplate
  | CreateTemplateSuccess
  | CreateTemplateFail;
