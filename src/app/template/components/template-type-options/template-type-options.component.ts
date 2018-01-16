import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TEMPLATE_TYPE_OPTIONS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TemplateTypeOptionsComponent),
  multi: true,
};

@Component({
  providers: [TEMPLATE_TYPE_OPTIONS_ACCESSOR],
  selector: 'template-type-options',
  templateUrl: './template-type-options.component.html',
  styleUrls: ['./template-type-options.component.scss']
})
export class TemplateTypeOptionsComponent implements ControlValueAccessor {

  value: TemplateType;
  TemplateType = TemplateType;
  private onModelChange: Function;
  private onTouch: Function;

  constructor() { }

  writeValue(value: TemplateType): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectTemplateType (value: TemplateType) {
    this.value = value;
    if (!!this.onModelChange && !!this.onTouch) {
      this.onTouch();
      this.onModelChange(this.value);
    }
  }
}

export enum TemplateType {
  BAR,
  KITCHEN,
  RECEIPT
}
