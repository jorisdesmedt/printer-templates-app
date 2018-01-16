import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicTemplate } from '../dynamic-template.type';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss']
})
export class TemplatePreviewComponent implements OnInit {

  @Input()
  public templateComponents: DynamicTemplate[];
  @Output() select = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onTemplateComponentItemSelect (index: number) {
    this.select.emit(index);
  }

}
