import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.scss']
})
export class NewTemplateComponent implements OnInit {

  form = this.fb.group({
    type: [null],
    name: ['', Validators.required],
    printer: [null]
  });
  templateType$ = this.form.get('type').valueChanges;
  templateName$ = this.form.get('name').valueChanges;
  printer$ = this.form.get('printer').valueChanges;

  printers$ = this.store.select(fromStore.getAllPrinters);

  step = 0;

  constructor(private fb: FormBuilder, private store: Store<fromStore.PrintingState>) { }

  onNextClicked() {
    if (this.step < 2) {
      this.step++;
    } else {
      const { value, valid } = this.form;
      if (valid) {
        this.store.dispatch(new fromStore.CreateTemplate(value));
        console.log(`Create printer: ${JSON.stringify(value)}`);
      }
    }
  }

  onPreviousClicked() {
    if (this.step > 0) {
      this.step--;
    }
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadPrinters());
  }

}
