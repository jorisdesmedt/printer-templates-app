import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Template } from '../../models/template.model';

@Component({
  selector: 'template-grid',
  templateUrl: './template-grid.component.html',
  styleUrls: ['./template-grid.component.scss']
})
export class TemplateGridComponent {

  @Input() templates: Template[];
  @Output() select = new EventEmitter<Template>();

  constructor() { }

  onClick (template: Template) {
    this.select.emit(template);
  }
}
