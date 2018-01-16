import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'printer-tile',
  templateUrl: './printer-tile.component.html',
  styleUrls: ['./printer-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrinterTileComponent {

  @Input() name: string;
  constructor() { }

}
