import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateComponentItem } from '../template-components/index';

@Component({
  selector: 'template-component-item',
  templateUrl: './template-component-item.component.html',
  styleUrls: ['./template-component-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateComponentItemComponent implements OnInit {

  @Input() templateComponentItem: TemplateComponentItem;
  @Output() add = new EventEmitter<TemplateComponentItem>();

  constructor() { }

  ngOnInit() {
  }

}
