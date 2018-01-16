import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateComponentItem } from '../template-components/index';

@Component({
  selector: 'template-component-order-item',
  templateUrl: './template-component-order-item.component.html',
  styleUrls: ['./template-component-order-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateComponentOrderItemComponent implements OnInit {
  @Input() templateComponentItem: TemplateComponentItem;
  @Output() remove = new EventEmitter<void>();
  @Output() up = new EventEmitter<void>();
  @Output() down = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
