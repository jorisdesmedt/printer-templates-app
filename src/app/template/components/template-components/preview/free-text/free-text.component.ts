import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TemplateComponent } from '../../../template-component.interface';

@Component({
  selector: 'free-text',
  templateUrl: './free-text.component.html',
  styleUrls: ['./free-text.component.scss']
})
export class FreeTextComponent implements TemplateComponent, OnInit {

  @Input() public data: any;
  style: any = {};

  constructor() { }

  public ngOnInit() {
    if (this.data) {
      this.style = {
        'font-size': `${this.data.fontSize}px`,
        'text-align': this.data.textAlignment,
        'padding': `${this.data.whitespaceTop}px
         ${this.data.whitespaceRight}px
         ${this.data.whitespaceBottom}px
         ${this.data.whitespaceLeft}px`
      };
    }
  }
}
