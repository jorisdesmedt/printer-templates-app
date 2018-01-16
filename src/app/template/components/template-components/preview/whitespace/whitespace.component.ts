import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../../../template-component.interface';

@Component({
  selector: 'white-space',
  templateUrl: './whitespace.component.html',
  styleUrls: ['./whitespace.component.scss'],
})
export class WhitespaceComponent implements TemplateComponent, OnInit {

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
