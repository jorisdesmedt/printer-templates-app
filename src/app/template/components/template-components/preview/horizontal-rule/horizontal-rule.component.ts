import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../../../template-component.interface';

@Component({
  selector: 'horizontal-rule',
  templateUrl: './horizontal-rule.component.html',
  styleUrls: ['./horizontal-rule.component.scss'],
})
export class HorizontalRuleComponent implements TemplateComponent, OnInit {

  public data: any;
  style: any = {};

  constructor() { }

  public ngOnInit() {
    if (this.data) {
      this.style = {
        height: `${this.data.height}px`
      };
    }
  }
}
