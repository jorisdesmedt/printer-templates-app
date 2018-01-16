import { EventEmitter } from '@angular/core';

export interface TemplateComponent {
  data: any;
}

export interface EditTemplateComponent {
  data: any;
  dataChange: EventEmitter<any>;
}
