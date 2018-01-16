
import { WhitespaceComponent } from './preview/whitespace/whitespace.component';
import { Type } from '@angular/core';
import { EditTemplateComponent, TemplateComponent } from '../template-component.interface';
import { FreeTextComponent } from './preview/free-text/free-text.component';
import { HorizontalRuleComponent } from './preview/horizontal-rule/horizontal-rule.component';
import { TextAlignment } from '../../models/text-alignment.enum';
import { FreeTextEditComponent } from './edit/free-text-edit/free-text-edit.component';
import { HorizontalRuleEditComponent } from './edit/horizontal-rule-edit/horizontal-rule-edit.component';
import { WhitespaceEditComponent } from './edit/whitespace-edit/whitespace-edit.component';

export interface TemplateComponentItem {
  id: string;
  title: string;
  description: string;
  component: Type<TemplateComponent>;
  editComponent?: Type<EditTemplateComponent>,
  data: any;
}

export interface TemplateComponentCollection {
  [id: string]: TemplateComponentItem;
}

export const templateComponents: TemplateComponentCollection = {
  'free-text': {
    id: 'free-text',
    title: 'Free Text',
    description: `With this component you can add free text to your template.
                  Next to this you can also choose the font and font-size.`,
    component: FreeTextComponent,
    editComponent: FreeTextEditComponent,
    data: {
      text: 'Free Text',
      textAlignment: TextAlignment.CENTER,
      fontSize: 14,
      whitespaceLeft: 20,
      whitespaceTop: 30,
      whitespaceRight: 20,
      whitespaceBottom: 10,
    }
  },
  'horizontal-rule': {
    id: 'horizontal-rule',
    title: 'Horizontal Rule',
    description: `With this component you can add a horizontal rule to your template.
                  This rule can be used to divide your template making it easier for your customer to read it`,
    component: HorizontalRuleComponent,
    editComponent: HorizontalRuleEditComponent,
    data: {
      width: 2
    }
  },
  'whitespace': {
    id: 'whitespace',
    title: 'Whitespace',
    description: `With this component you can add some whitespace to your template.
                  This will allow you to add some blank space to your component, for a customer's signature for example`,
    component: WhitespaceComponent,
    editComponent: WhitespaceEditComponent,
    data: {
      height: 10
    }
  },
};

export const entryComponents = [
  FreeTextComponent,
  FreeTextEditComponent,
  HorizontalRuleComponent,
  WhitespaceComponent,
  HorizontalRuleEditComponent,
  WhitespaceEditComponent
];
