import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditTemplateComponent } from '../../../template-component.interface';

@Component({
  selector: 'whitespace-edit',
  templateUrl: './horizontal-rule-edit.component.html',
  styleUrls: ['./horizontal-rule-edit.component.scss']
})
export class HorizontalRuleEditComponent implements OnInit, EditTemplateComponent {

  @Input() data: any = {};
  @Output() dataChange = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      height: [this.data.height, Validators.required]
    });
  }

  save(event: UIEvent, form: FormGroup) {
    event.preventDefault();
    const { value, valid, touched } = form;
    if (valid && touched) {
      this.dataChange.emit(value);
    }
  }

}
