import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { Template } from '../../models/template.model';

@Component({
  selector: 'templates-list',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  public templates$ = this.store.select(fromStore.getAllTemplates);

  constructor(private store: Store<fromStore.PrintingState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTemplates());
  }

  onSelect(template: Template) {
    console.log(`Need to route to template with id: ${template.id}`);
  }

}
