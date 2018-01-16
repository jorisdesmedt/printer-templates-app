import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditTemplateComponent } from '../../../template-component.interface';

@Component({
  selector: 'free-text-edit',
  templateUrl: './free-text-edit.component.html',
  styleUrls: ['./free-text-edit.component.scss']
})
export class FreeTextEditComponent implements OnInit, EditTemplateComponent {

  @Input() data: any = {};
  @Output() dataChange = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      text: [this.data.text, Validators.required],
      textAlignment: [this.data.textAlignment, Validators.required],
      fontSize: [this.data.fontSize, Validators.required],
      whitespaceLeft: [this.data.whitespaceLeft, Validators.required],
      whitespaceTop: [this.data.whitespaceTop, Validators.required],
      whitespaceRight: [this.data.whitespaceRight, Validators.required],
      whitespaceBottom: [this.data.whitespaceBottom, Validators.required],
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
