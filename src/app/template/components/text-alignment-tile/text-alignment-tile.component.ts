import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TextAlignment } from '../../models/text-alignment.enum';

@Component({
  selector: 'text-alignment-tile',
  templateUrl: './text-alignment-tile.component.html',
  styleUrls: ['./text-alignment-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAlignmentTileComponent implements OnInit {

  @Input() type: TextAlignment;
  TextAlignment = TextAlignment;

  constructor() { }

  ngOnInit() {
  }

}
