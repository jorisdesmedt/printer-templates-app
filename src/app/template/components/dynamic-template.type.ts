import { Type } from '@angular/core';
import { TemplateComponent } from './template-component.interface';

export interface DynamicTemplate {
  component: Type<TemplateComponent>;
  data: any;
};
