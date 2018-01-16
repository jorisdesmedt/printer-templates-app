import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.scss']
})
export class WizardCardComponent implements OnInit {

  @Input() nextEnabled = true;
  @Input() previousEnabled = true;
  @Input() nextLabel = 'Next';
  @Input() previousLabel = 'Previous';
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
