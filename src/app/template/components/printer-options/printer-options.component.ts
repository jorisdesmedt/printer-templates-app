import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Printer } from '../../models/printer.model';

const PRINTER_OPTIONS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PrinterOptionsComponent),
  multi: true,
};

@Component({
  providers: [PRINTER_OPTIONS_ACCESSOR],
  selector: 'printer-options',
  templateUrl: './printer-options.component.html',
  styleUrls: ['./printer-options.component.scss']
})
export class PrinterOptionsComponent implements ControlValueAccessor {

  @Input() printers: Printer[];
  value: Printer;
  private onModelChange: Function;
  private onTouch: Function;

  constructor() { }

  writeValue(value: Printer): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectTemplateType (value: Printer) {
    this.value = value;
    if (!!this.onModelChange && !!this.onTouch) {
      this.onTouch();
      this.onModelChange(this.value);
    }
  }
}
