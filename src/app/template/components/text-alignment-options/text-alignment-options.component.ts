import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextAlignment } from '../../models/text-alignment.enum';

const TEMPLATE_TYPE_OPTIONS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextAlignmentOptionsComponent),
  multi: true,
};

@Component({
  providers: [TEMPLATE_TYPE_OPTIONS_ACCESSOR],
  selector: 'text-alignment-options',
  templateUrl: './text-alignment-options.component.html',
  styleUrls: ['./text-alignment-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAlignmentOptionsComponent implements ControlValueAccessor {

  value: TextAlignment;
  TextAlignment = TextAlignment;
  private onModelChange: Function;
  private onTouch: Function;

  constructor() { }

  writeValue(value: TextAlignment): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectTemplateType (value: TextAlignment) {
    this.value = value;
    if (!!this.onModelChange && !!this.onTouch) {
      this.onTouch();
      this.onModelChange(this.value);
    }
  }

}
