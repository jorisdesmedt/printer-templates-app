import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditTemplateComponent } from '../../../template-component.interface';

@Component({
  selector: 'whitespace-edit',
  templateUrl: './whitespace-edit.component.html',
  styleUrls: ['./whitespace-edit.component.scss']
})
export class WhitespaceEditComponent implements OnInit, EditTemplateComponent {

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
