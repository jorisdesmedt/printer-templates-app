import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateComponentItem } from '../template-components/index';

@Component({
  selector: 'app-template-component-item-list',
  templateUrl: './template-component-item-list.component.html',
  styleUrls: ['./template-component-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateComponentItemListComponent implements OnInit {

  @Input() templateComponentItems: TemplateComponentItem[];
  @Output() addTemplateComponentItem = new EventEmitter<TemplateComponentItem>();

  constructor() { }

  ngOnInit() {
  }

}
