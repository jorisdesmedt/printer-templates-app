import { Component, OnInit } from '@angular/core';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TemplateComponentItem } from '../../components/template-components/index';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-template',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.scss']
})
export class TemplatePageComponent implements OnInit {

  templateComponents$: Observable<TemplateComponentItem[]> = this.store.select(fromStore.getAllTemplateComponents);
  visualisedTemplateComponents$: Observable<TemplateComponentItem[]> = this.store.select(fromStore.getVisualisedTemplate);
  editingTemplateComponent$: Observable<TemplateComponentItem> = this.store.select(fromStore.getSelectedTemplateComponentForEditing);
  addItemsView = false;
  previewMode = false;

  constructor(private store: Store<fromStore.PrintingState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTemplateComponents());
  }

  onTemplateComponentItemAdd (templateComponentItem: TemplateComponentItem) {
    this.store.dispatch(new fromStore.AddSelectedTemplateComponent(templateComponentItem));
  }

  onTemplateComponentItemRemove (value: { templateComponentItem: TemplateComponentItem, index: number}) {
    this.store.dispatch(new fromStore.RemoveSelectedTemplateComponent(value));
  }

  onTemplateComponentItemMoveUp (value: { templateComponentItem: TemplateComponentItem, index: number}) {
    this.store.dispatch(new fromStore.MoveSelectedTemplateComponentUp(value));
  }

  onTemplateComponentItemMoveDown (value: { templateComponentItem: TemplateComponentItem, index: number}) {
    this.store.dispatch(new fromStore.MoveSelectedTemplateComponentDown(value));
  }

  onTemplateComponentDataChange(data: any) {
    this.store
      .select(fromStore.getTemplateComponentsEditingIndex)
      .pipe(
        take(1)
      )
      .subscribe(index =>
        this.store.dispatch(new fromStore.UpdateTemplateComponentData({ index, data }))
      )
      .unsubscribe();
  }

  onTemplateComponentSelect (index: number) {
    this.store.dispatch(new fromStore.SelectTemplateComponentForEditing(index));
  }

  toggleView() {
    this.addItemsView = !this.addItemsView;
  }

  toggleMode() {
    this.previewMode = !this.previewMode;
  }

}
