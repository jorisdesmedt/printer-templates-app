import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateComponentItem } from '../template-components/index';

@Component({
  selector: 'template-component-order-item-list',
  templateUrl: './template-component-order-item-list.component.html',
  styleUrls: ['./template-component-order-item-list.component.scss']
})
export class TemplateComponentOrderItemListComponent implements OnInit {

  @Input() templateComponentItems: TemplateComponentItem[];
  @Output() remove = new EventEmitter<{templateComponentItem: TemplateComponentItem, index: number}>();
  @Output() up = new EventEmitter<{templateComponentItem: TemplateComponentItem, index: number}>();
  @Output() down = new EventEmitter<{templateComponentItem: TemplateComponentItem, index: number}>();

  constructor() { }

  ngOnInit() {
  }

  onTemplateComponentRemove (templateComponentItem: TemplateComponentItem, index: number) {
    this.remove.emit({ templateComponentItem, index });
  }

  onTemplateComponentMoveUp (templateComponentItem: TemplateComponentItem, index: number) {
    this.up.emit({ templateComponentItem, index });
  }

  onTemplateComponentMoveDown (templateComponentItem: TemplateComponentItem, index: number) {
    this.down.emit({ templateComponentItem, index });
  }

}
