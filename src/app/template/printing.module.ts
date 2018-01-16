import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatePageComponent } from './containers/template/template-page.component';
import { TemplatePreviewComponent } from './components/template-preview/template-preview.component';
import { DynamicTemplateComponent } from './components/dynamic-template/dynamic-template.component';
import { DynamicTemplateHostDirective } from './directives/dynamic-template-host.directive';
import { NewTemplateComponent } from './containers/new-template/new-template.component';
import { TemplateTypeOptionsComponent } from './components/template-type-options/template-type-options.component';
import { WizardCardComponent } from './components/wizard-card/wizard-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TemplatesComponent } from './containers/templates/templates.component';

import * as fromStore from './store';
import * as fromServices from './service';
import * as fromTemplateComponents from './components/template-components';
import { TemplateTileComponent } from './components/template-tile/template-tile.component';
import { TemplateGridComponent } from './components/template-grid/template-grid.component';
import { RouterModule, Routes } from '@angular/router';
import { PrinterTileComponent } from './components/printer-tile/printer-tile.component';
import { PrinterOptionsComponent } from './components/printer-options/printer-options.component';
import { TemplateComponentItemComponent } from './components/template-component-item/template-component-item.component';
import { TemplateComponentItemListComponent } from './components/template-component-item-list/template-component-item-list.component';
import { TemplateComponentOrderItemComponent } from './components/template-component-order-item/template-component-order-item.component';
import { TemplateComponentOrderItemListComponent } from './components/template-component-order-item-list/template-component-order-item-list.component';
import { FreeTextEditComponent } from './components/template-components/edit/free-text-edit/free-text-edit.component';
import { TextAlignmentOptionsComponent } from './components/text-alignment-options/text-alignment-options.component';
import { TextAlignmentTileComponent } from './components/text-alignment-tile/text-alignment-tile.component';
import { DynamicEditTemplateComponent } from './components/dynamic-edit-template/dynamic-edit-template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent
  },
  {
    path: 'new',
    component: NewTemplateComponent
  },
  {
    path: 'edit',
    component: TemplatePageComponent
  }
];

@NgModule({
  providers: [
    ...fromServices.services
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('printing', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
    HttpClientModule,
  ],
  declarations: [
    TemplatePageComponent,
    TemplatePreviewComponent,
    DynamicTemplateComponent,
    DynamicTemplateHostDirective,
    ...fromTemplateComponents.entryComponents,
    NewTemplateComponent,
    TemplateTypeOptionsComponent,
    WizardCardComponent,
    TemplatesComponent,
    TemplateTileComponent,
    TemplateGridComponent,
    PrinterTileComponent,
    PrinterOptionsComponent,
    TemplateComponentItemComponent,
    TemplateComponentItemListComponent,
    TemplateComponentOrderItemComponent,
    TemplateComponentOrderItemListComponent,
    FreeTextEditComponent,
    TextAlignmentOptionsComponent,
    TextAlignmentTileComponent,
    DynamicEditTemplateComponent
  ],
  entryComponents: [
    ...fromTemplateComponents.entryComponents
  ],
  exports: [TemplatePageComponent, NewTemplateComponent, TemplatesComponent]
})
export class PrintingModule {
}
