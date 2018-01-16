import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TemplateType } from '../template-type-options/template-type-options.component';

@Component({
  selector: 'template-tile',
  templateUrl: './template-tile.component.html',
  styleUrls: ['./template-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateTileComponent {

  @Input() name: string;
  @Input() type: TemplateType;
  TemplateType = TemplateType;

  constructor() { }

}
