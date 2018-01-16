import { Printer } from './printer.model';
import { TemplateType } from '../components/template-type-options/template-type-options.component';

export interface Template {
  id?: number;
  name?: string;
  type?: TemplateType;
  printer?: Printer;
  templateComponents?: any[];
}
